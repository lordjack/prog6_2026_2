// Configuração do Firebase — sintaxe da v8 (^8.10.0), API encadeada (firebase.database()...).
// NÃO usar Firestore aqui: este projeto usa exclusivamente o Realtime Database.
import firebase from 'firebase/app';
import 'firebase/database';

// TODO (aluno): troque pelos dados do SEU projeto no console do Firebase.
// Console > Configurações do projeto > Seus apps > SDK setup and configuration.
const firebaseConfig = {
  apiKey: 'SUA_API_KEY',
  authDomain: 'SEU_PROJETO.firebaseapp.com',
  databaseURL: 'https://SEU_PROJETO-default-rtdb.firebaseio.com',
  projectId: 'SEU_PROJETO',
  storageBucket: 'SEU_PROJETO.appspot.com',
  messagingSenderId: 'SEU_SENDER_ID',
  appId: 'SEU_APP_ID',
};

// Evita reinicializar o app caso o arquivo seja importado mais de uma vez.
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
