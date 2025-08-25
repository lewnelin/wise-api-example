# WiseAPI – Videoconferência Segura

WiseCare (https://wisecare.com.br/) fornece a WiseAPI, um serviço de videoconferência segura que alia segurança, acessibilidade e qualidade de vídeo em uma solução de fácil integração.  
Ideal para aplicações em saúde e organizações que necessitam de comunicação confiável, acessível e registrada.

---

## Sobre

A WiseAPI oferece:

- Videoconferência segura com controle de acesso por perfis e políticas.  
- Acessibilidade via tradução em LIBRAS com avatar em IA integrado na conferência.  
- Gravação, armazenamento, recuperação e validação de conteúdo em blockchain.  
- Interface configurável e integração simples em qualquer sistema web.  
- Relatórios e registros completos das interações.  
- Contribuição ambiental: cada videoconferência substitui deslocamentos físicos, reduzindo emissão de CO₂ e convertendo quilômetros economizados em créditos de carbono.

---

## Sumário

1. Features  
2. Instalação  
3. Exemplos de Uso  
   - Criar videoconferência  
   - Iniciar videoconferência  
   - Encerrar videoconferência  
   - Listar videoconferências  
   - Recuperar videoconferência  
   - Deletar videoconferência 

---

## Features

- Controle de organizações e unidades organizacionais  
- Controle avançado de usuários e permissões  
- Configuração de funcionalidades da conferência  
- Customização de interface  
- Gravação client-side e server-side  
- Armazenamento e recuperação de vídeos gravados  
- Manifesto de ações salvo em blockchain  
- Integração com serviços de blockchain privadas  
- Armazenamento de arquivos em nuvem  

---

## Instalação

Usando npm:

```bash
npm install wise-api
```

## Exemplo de Usos

### Criar videoconferência

import WiseApi from 'wise-api';
const wiseapi = WiseApi({ apiKey: 'APIKEY' });

const data = {
  profile: 'DEFAULT',
  skin: 'DEFAULT',
  org: 'org',
  orgUnit: 'orgUnit',
  joinPolicy: 'PUBLIC',
  listPolicy: 'PUBLIC'
};

wiseapi.session.create(data).then((response) => {
  console.log(response);
});


### Iniciar videoconferência

import WiseApi from 'wise-api';
const wiseapi = WiseApi({ apiKey: 'APIKEY' });

const sessionName = 'session123';

const options = {
  parentNode: document.getElementById('meet'),
  userInfo: { displayName: 'Usuário' },
  startWithAudioMuted: false,
  startWithVideoMuted: false
};

wiseapi.session.startConference(sessionName, options).then((response) => {
  console.log(response);
});


### Encerrar videoconferência

import WiseApi from 'wise-api';
const wiseapi = WiseApi({ apiKey: 'APIKEY' });

wiseapi.session.stopConference().then(() => {
  console.log('ok');
});


### Listar videoconferências

import WiseApi from 'wise-api';
const wiseapi = WiseApi({ apiKey: 'APIKEY' });

wiseapi.session.list().then((sessions) => {
  console.log(sessions);
});


### Recuperar videoconferência

import WiseApi from 'wise-api';
const wiseapi = WiseApi({ apiKey: 'APIKEY' });

const sessionId = 'sks3lf6lhxqt2a1j';
wiseapi.session.get(sessionId).then((session) => {
  console.log(session);
});
