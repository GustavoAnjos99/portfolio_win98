import portal360 from '../../img/portal360.png'
import ateliechocolate from '../../img/ateliechocolate.png'
import barberfashion from '../../img/barberfashion.png'
import pci from '../../img/pci.png'
import calmo from '../../img/calmo.png'
import predimecmanutapp from '../../img/predimecmanutapp.png'
import cligemini from '../../img/portal360.png'
import futsimulator from '../../img/futsimulator.png'

export const projetos = {
    "Projetos Interdisciplinares": {
        "Portal360": {
            "foto": portal360,
            "texto": 'O portal 360 constitue em um dashboard interativo para leitura de dados dos países em relação a PIB, GINI e IDH. Neste projeto participei apenas do front-end, onde utilizei bootstrap para a estrutura do site. Nesse projeto foi utilizado apenas HTML, CSS e javascript para a construção. Este foi o projeto interdisciplinar para o primeiro semestre da minha falcudade.',
            "links": ['https://github.com/KaykySousa/portal360', 'https://portal-360.vercel.app/']
        },
        "Ateliê do Chocolate": {
            "foto": ateliechocolate,
            "texto": 'Este foi o projeto interdisciplinar feito para o segundo semestre da minha faculdade e ele é um sistema para um comércio, onde há a parte da gerente do comércio e a parte onde o cliente faz os pedidos. Aqui eu também fiquei na parte do front-end, apenas criando e ajustanto as interfaces. porém neste projeto utilizamos react, firebase como banco de dados e node para o back-end.',
            "links": ['https://github.com/Equipe-BooleanTech/Projeto_Interdisciplinar_II', 'https://sistema-atelie-do-chocolate.vercel.app/']
        },
        "Barberfashion": {
            "foto": barberfashion,
            "texto": 'Este é o projeto interdiciplinar referente ao terceiro semestre da minha faculdade, e aqui, fiquei no back-end. Nós utilizamos python para a linguagem do back-end e o mongoDB como banco de dados. O projeto é um sistema de gerenciamento de barbearia, onde há as partes do funcionário, gerente e cliente.',
            "links": ['https://github.com/GrupoZonaLeste/BarberFashion', '#']
        },
        "Projeto Colaborativo Internacional": {
            "foto": pci,
            "texto": 'Este projeto foi feito por conta da parceria da FATEC com a Uniminuto da colômbia, fizemos grupos que misturavam brasileiros e colombianos para ser feito um site que deveria ter como tema um dos tópicos da Agenda 2030 da ONU. Escolhemos fazer sobre a erradicação da pobreza, que infelizmente é algo presente na rotina de muitos brasileiros e colômbianos.',
            "links": ['#', '#']
        },
        "Calmô!": {
            "foto": calmo,
            "texto": 'O Calmô oferece soluções simples e eficazes para te ajudar a organizar suas ideias, otimizar suas tarefas e alcançar seus objetivos. O Calmô! é um guia prático e intuitivo para quem busca uma vida mais produtiva e menos estressante. Referente as tecnologias, o projeto foi desenvolvido em React, Node, Firebase e Mongodb',
            "links": ['https://github.com/GrupoZonaLeste/Calmo', 'https://calmo-v1.vercel.app/']
        },
        "Predimec Manutenções App": {
            "foto": predimecmanutapp,
            "texto": 'O projeto do quinto semestre da faculdade foi desenvolvido para resolver os problemas da Predimec, empresa de manutenção preventiva e preditiva de equipamentos indútriais. Isso tornou-se necessário criar um sistema para que a empresa consiga armazenar e organizar as fotos dos serviços prestados. Também havia a necessidade de facilitar o processo de geração dos relatórios referentes a cada manutenção. A aplicação foi feita em React Native, Node e PostgreSQL',
            "links": ['https://github.com/GrupoZonaLeste/Predimec-ManutencoesApp', '#']
        },
    },
    "Profissionais": {
        "Automações": {
            "foto": '',
            "texto": 'Projeto que automatiza o desenvolvimento e formatação dos relatórios de análise de vibrações da Predimec. Os relatórios são gerados por um outro programa onde o mesmo adiciona os dados das análise de vibrações em um arquivo Word, a partir disso é onde começa a formatação para criar os relatórios Predimec. Colocando o arquivo Word com os dados e o Excel para criação de tabelas e gráficos, é só executar a aplicação para ter os relatórios prontos. O projeto inteiro foi desenvolvido utilizando Python e suas bibiotecas.',
            "links": ['https://github.com/GustavoAnjos99/Predimec-AnaliseVibracoes', '#']
        }
    },
    "Pessoais": {
        "CLI Gemini": {
            "foto": cligemini,
            "texto": 'O projeto se trata de um CLI construído através do framework Typer, que é próprio para fazer CLIs. A ideia do projeto é que ele foi feito para receber prompts de IA utilizando a API do Gemini da Google. om esse CLI você pode perguntar a IA pro um prompt simples, fazer ela ler arquivos e imagens e responder de acordo com seu prompt, e, até criar arquivos .txt ou .md que contém a resposta da IA.',
            "links": ['https://github.com/GustavoAnjos99/CLI-Typer-Gemini', '#']
        },
        "Fut Simulator": {
            "foto": futsimulator,
            "texto": 'Este é um projeto meu em que eu fiz baseado em campeonatos que eu e meus amigos faziam porém no papel. Então resolvi fazer um sistema de campeonato de pontos corridos para que facilita o trabalho de gerar o campeonato. Aqui eu utilizei apenas html, css e javascript.',
            "links": ['https://github.com/GustavoAnjos99/FutSimulator', 'https://futsimulator.vercel.app/']
        }
    }
}