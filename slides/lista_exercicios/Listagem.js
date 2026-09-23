import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';

const alunos = [
  { id: 1, nome: 'Maria Silva', idade: 17, curso: 'Desenvolvimento de Sistemas', nota: 9.5, status: 'Aprovado' },
  { id: 2, nome: 'Rodrigo Santos', idade: 18, curso: 'Redes de Computadores', nota: 7.2, status: 'Aprovado' },
  { id: 3, nome: 'Gabriela Lima', idade: 17, curso: 'Desenvolvimento de Sistemas', nota: 6.0, status: 'Em Exame' },
  { id: 4, nome: 'Bruno Souza', idade: 19, curso: 'Mecatrônica', nota: 8.8, status: 'Aprovado' },
  { id: 5, nome: 'Chaves del Ocho', idade: 18, curso: 'Desenvolvimento de Sistemas', nota: 5.5, status: 'Em Exame' },
  { id: 6, nome: 'Chiquinha Neves', idade: 17, curso: 'Informática para Internet', nota: 10.0, status: 'Aprovado' },
  { id: 7, nome: 'Seu Madruga', idade: 20, curso: 'Administração', nota: 4.0, status: 'Reprovado' },
  { id: 8, nome: 'Ana Beatriz', idade: 18, curso: 'Desenvolvimento de Sistemas', nota: 8.0, status: 'Aprovado' },
];

function corDoStatus(status) {
  if (status === 'Aprovado') return '#16a34a';
  if (status === 'Em Exame') return '#ca8a04';
  return '#dc2626';
}

export default function Listagem() {
  const [pesquisa, setPesquisa] = useState('');

  const filtrados = alunos.filter((aluno) =>
    aluno.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
    aluno.curso.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>📚 Lista de Alunos</Text>
        <Text style={styles.contador}>{filtrados.length} aluno(s)</Text>
      </View>

      <TextInput
        style={styles.pesquisa}
        placeholder="Pesquisar por nome ou curso..."
        value={pesquisa}
        onChangeText={setPesquisa}
      />

      <ScrollView style={styles.lista} contentContainerStyle={styles.listaConteudo}>
        {filtrados.map((aluno) => (
          <View key={aluno.id} style={styles.card}>
            <View style={styles.avatar}>
              <Text style={styles.avatarTexto}>{aluno.nome[0]}</Text>
            </View>

            <View style={styles.info}>
              <View style={styles.linhaNomeIdade}>
                <Text style={styles.nome}>{aluno.nome}</Text>
                <Text style={styles.idade}>{aluno.idade} anos</Text>
              </View>
              <Text style={styles.curso}>{aluno.curso}</Text>
              <Text>Nota: {aluno.nota.toFixed(1)}</Text>
            </View>

            <Text style={[styles.status, { color: corDoStatus(aluno.status) }]}>
              {aluno.status}
            </Text>
          </View>
        ))}

        {filtrados.length === 0 && (
          <Text style={styles.vazio}>Nenhum aluno encontrado 🔎</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },
  header: {
    backgroundColor: '#1e293b',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titulo: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  contador: {
    color: '#cbd5e1',
    fontSize: 14,
  },
  pesquisa: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    fontSize: 16,
  },
  lista: {
    flex: 1,
  },
  listaConteudo: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#3b82f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  linhaNomeIdade: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  idade: {
    color: '#64748b',
    fontSize: 13,
  },
  curso: {
    color: '#64748b',
    marginTop: 2,
  },
  status: {
    fontWeight: 'bold',
  },
  vazio: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
    color: '#64748b',
  },
});
