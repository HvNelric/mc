import React from 'react';
import './App.scss';
import Btn from './components/Button/Btn';
import Phases from './components/Phases/Phases';
import AskCard from './components/AskCard/AskCard';
import CampaignInfos from './components/CampaignInfos/CampaignInfos';
import AllCard from './components/AllCard/AllCard';

function App() {

  const askArray = [
    {
      typeText: "Question Communauté",
      title: " This isn't a car. This isn't a car. It's not who I am underneath but what I do that defines me.",
      tagsArray: ['économie', 'internet', 'technologie', 'science & vie'],
      bottomText: "Choix dans une liste",
      href: "https://www.instax.fr"
    },
    {
      typeText: "Question Communauté",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      tagsArray: ['service', 'jeux vidéo', 'IA', 'Quantique'],
      bottomText: "Choix dans une liste",
      href: "https://www.instagram.fr"
    },
    {
      typeText: "Question Communauté",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      tagsArray: ['IA', 'Cryptomonnaie', 'Cyber sécurité'],
      bottomText: "Choix dans une liste",
      href: "https://www.fbouc.fr"
    },
    {
      typeText: "Question Communauté",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      tagsArray: ['style de vie', 'méteo', 'climat', 'technologie'],
      bottomText: "Choix dans une liste",
      href: "https://www.instax.fr"
    }
  ]

  const responseArray = [
    {
      title: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      tagsArray: ['économie', 'internet', 'technologie', 'science & vie'],
      predictNumber: 25,
      expertNumber: 43,
      expertMax: 69
    },
    {
      title: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      tagsArray: ['économie', 'internet', 'technologie', 'science & vie'],
      predictNumber: 0,
      expertNumber: 439,
      expertMax: 6988
    },
    {
      title: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      tagsArray: ['économie', 'internet', 'technologie', 'science & vie'],
      predictNumber: 95,
      expertNumber: 102,
      expertMax: 244
    },
    {
      title: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      tagsArray: ['économie', 'internet', 'technologie', 'science & vie'],
      predictNumber: 5,
      expertNumber: 12,
      expertMax: 2478
    }
  ]

  const resultArray = [
    {
      title: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.", 
      resultAskNumber: 24,
      resultTerminated: new Date()
    },
    {
      title: "Il n'a pas fait que survivre cinq siècles", 
      resultAskNumber: 5,
      resultTerminated: new Date()
    },
    {
      title: "Il a été popularisé dans les années 1960 grâce à la vente de feuilles", 
      resultAskNumber: 87,
      resultTerminated: new Date()
    },
    {
      title: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.", 
      resultAskNumber: 890,
      resultTerminated: new Date()
    }
  ]

  return (
    <div className="app">
      <Btn fn={() => console.log('first')} />
      <Btn href={"http://www.google.fr"} />
      <Phases phase={'collecte'} />

      <h2>Toutes les campagnes</h2>
      <div style={{padding: '20px  0 80px 0', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)'}}>
        <AllCard 
          campaignNumber={1}
        />
      </div>

      <h2>Campagne infos</h2>
      <div style={{padding: '20px  0 80px 0'}}>
        <CampaignInfos 
          questionNumber={23}
          dateEnd={new Date("11/26/2023")}
        />
      </div>

      <h2>QUESTIONS</h2>
      <div className="grid col-3" style={{padding: '20px  0 80px 0'}}>
        {
          askArray.map(card => (
            <AskCard
              cardType={"question"}
              typeText={card.typeText}
              title={card.title}
              tagsArray={card.tagsArray}
              href={card.href}
              bottomText={card.bottomText}
            />
          ))
        }
      </div>

      <h2>REPONSES</h2>
      <div className="grid col-2" style={{padding: '20px  0 80px 0'}}>
        {
          responseArray.map(card => (
            <AskCard
              cardType={'response'}
              title={card.title}
              tagsArray={card.tagsArray}
              predictNumber={card.predictNumber}
              expertNumber={card.expertNumber}
              expertMax={card.expertMax}
            />
          ))
        }
      </div>

      <h2>RESULTATS</h2>
      <div className="grid col-4" style={{padding: '20px  0 80px 0'}}>
        {
          resultArray.map(card => (
            <AskCard
              title={card.title}
              resultAskNumber={card.resultAskNumber}
              resultTerminated={card.resultTerminated}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
