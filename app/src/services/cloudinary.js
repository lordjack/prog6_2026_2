// Upload "unsigned" direto para o Cloudinary (sem precisar de backend/chave secreta).
// TODO (aluno): troque pelos dados do SEU cloud e do upload preset (unsigned),
// criados em Cloudinary > Settings > Upload > Upload presets.
const CLOUD_NAME = 'SEU_CLOUD_NAME';
const UPLOAD_PRESET = 'SEU_UPLOAD_PRESET';

export async function enviarFotoParaCloudinary(uriDaFoto) {
  const formData = new FormData();
  formData.append('file', { uri: uriDaFoto, type: 'image/jpeg', name: 'foto.jpg' });
  formData.append('upload_preset', UPLOAD_PRESET);

  const resposta = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
    method: 'POST',
    body: formData,
  });

  const dados = await resposta.json();

  if (!resposta.ok) {
    throw new Error(dados.error?.message || 'Falha ao enviar a foto para o Cloudinary.');
  }

  return dados.secure_url;
}
