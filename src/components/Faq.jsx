import { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import React from 'react';

export default function FAQ() {
  // État pour suivre quel accordéon est ouvert
  const [openIndex, setOpenIndex] = useState(null);

  // Fonction pour basculer l'accordéon
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Données des FAQ
  const faqs = [
    {
      question: "Pourquoi choisir BrandBuzz Communication ?",
      answer: (
        <div>
          <p className="mb-2">BrandBuzz Communication est une agence reconnue pour sa maîtrise du marketing digital et de la création de sites web. Voici ce qui la distingue :</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Expérience locale</strong> : Une parfaite connaissance du marché.</li>
            <li><strong>Expertise</strong> : Des services variés (SEO, publicité, gestion des réseaux sociaux, etc.).</li>
            <li><strong>Approche sur mesure</strong> : Des stratégies adaptées à chaque client.</li>
            <li><strong>Accompagnement complet</strong> : De l'audit initial au suivi des performances.</li>
          </ul>
        </div>
      )
    },
    {
      question: "Quels services propose BrandBuzz ?",
      answer: (
        <div>
          <p className="mb-2">Nos services incluent :</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Création de sites web</li>
            <li>Référencement naturel (SEO)</li>
            <li>Publicité en ligne (Google Ads, Meta Ads, etc.)</li>
            <li>Rédaction de contenu et animation de blogs</li>
            <li>Gestion des réseaux sociaux (Instagram, Facebook, LinkedIn, etc.)</li>
            <li>Conception graphique et création de visuels</li>
            <li>Digital Marketing</li>
            <li>Services de design</li>
            <li>Photo & Vidéo</li>
          </ul>
        </div>
      )
    },
    {
      question: "Comment choisir la meilleure agence de communication ?",
      answer: (
        <div>
          <p className="mb-2">Voici quelques critères à prendre en compte :</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Expérience et références</strong> : Consultez les projets réalisés par l'agence.</li>
            <li><strong>Expertise</strong> : Vérifiez si l'agence maîtrise les compétences nécessaires à vos besoins.</li>
            <li><strong>Avis clients</strong> : Les avis en ligne peuvent vous donner une idée de la réputation de l'agence.</li>
            <li><strong>Proximité</strong> : Travailler avec une agence locale facilite la communication et le suivi des projets.</li>
            <li><strong>Coûts et budget</strong> : Assurez-vous que les tarifs sont adaptés à vos moyens.</li>
          </ul>
        </div>
      )
    },
    {
      question: "Comment se passe la collaboration avec BrandBuzz ?",
      answer: (
        <div>
          <p className="mb-2">La collaboration se déroule généralement en plusieurs étapes :</p>
          <ol className="list-decimal pl-5 space-y-1">
            <li><strong>Audit</strong> : Analyse de vos besoins et de votre situation actuelle.</li>
            <li><strong>Stratégie</strong> : Proposition d'une stratégie de communication personnalisée.</li>
            <li><strong>Mise en œuvre</strong> : Réalisation des actions convenues (site web, campagne publicitaire, etc.).</li>
            <li><strong>Suivi et optimisation</strong> : Analyse des résultats et ajustement de la stratégie si nécessaire.</li>
          </ol>
        </div>
      )
    },
    {
      question: "Quel budget prévoir pour une collaboration avec BrandBuzz ?",
      answer: (
        <div>
          <p className="mb-2">Le budget dépend des services demandés, de la durée de la collaboration et de la complexité du projet. Par exemple :</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Création de sites web</strong> : De 4 000 MAD à 30 000 MAD ou plus, selon les spécificités.</li>
            <li><strong>SEO</strong> : Coût mensuel entre 2 000 MAD et 10 000 MAD, selon la compétitivité des mots-clés.</li>
            <li><strong>Publicité en ligne</strong> : Le budget des campagnes varie en fonction de l'ampleur et des objectifs.</li>
          </ul>
          <p className="mt-2">Nous élaborons avec vous un plan sur-mesure, qui colle à vos exigences et à votre budget. La transparence est notre maître-mot : pas de surprise, vous ne paierez jamais un centime de plus que ce qui a été clairement établi dès le départ.</p>
        </div>
      )
    },
    {
      question: "Combien de temps faut-il pour obtenir des résultats ?",
      answer: (
        <div>
          <p className="mb-2">Le délai d'obtention des résultats dépend de la stratégie adoptée :</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>SEO</strong> : Les premiers résultats apparaissent entre 3 et 6 mois.</li>
            <li><strong>Publicité en ligne</strong> : Les résultats peuvent être immédiats dès la mise en ligne des annonces.</li>
            <li><strong>Création de site web</strong> : Le délai de livraison d'un site web varie de 2 à 8 semaines.</li>
          </ul>
          <p className="mt-2">Il est important de comprendre que le marketing digital est un processus continu et ça peut demander un peu de patience avant de constater des résultats marquants.</p>
        </div>
      )
    },
    {
      question: "Comment évaluer la performance de l'agence ?",
      answer: (
        <div>
          <p className="mb-2">Pour évaluer la performance, vous pouvez vous baser sur :</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Les indicateurs clés de performance (KPI)</strong> tels que le trafic web, le taux de conversion, le coût par acquisition (CPA), etc.</li>
            <li><strong>Les résultats concrets</strong> (augmentation des ventes, des leads, etc.).</li>
            <li><strong>La réactivité</strong> et la capacité à s'adapter aux imprévus.</li>
          </ul>
          <p className="mt-2">Nous vous fournirons des rapports réguliers pour vous tenir au courant de la performance de votre campagne.</p>
        </div>
      )
    }
  ];

  return (
    <div className="bg-gradient-to-br from-black to-indigo-950 text-white py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-purple-400 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-300 rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center mb-10">
          <MessageCircle size={36} className="text-blue-400 mr-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-300">
            Quel problème essayez-vous de résoudre ?
          </h2>
        </div>
        
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={` bg-opacity-5 backdrop-blur-sm rounded-xl overflow-hidden border-l-4 hover:shadow-lg transition-all duration-300 transform ${
                openIndex === index ? 'border-l-blue-400 scale-102' : 'border-l-purple-600 hover:border-l-blue-500'
              }`}
            >
              <button
                className="flex justify-between items-center w-full p-5 text-left focus:outline-none group"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-xl font-semibold group-hover:text-blue-300 transition-colors duration-300">{faq.question}</h3>
                <div className={`rounded-full p-2 ${openIndex === index ? 'bg-blue-500 bg-opacity-20 text-blue-300' : 'bg-purple-800 bg-opacity-30 text-purple-300 group-hover:bg-blue-500 group-hover:bg-opacity-20 group-hover:text-blue-300'} transition-all duration-300`}>
                  {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="p-5 pt-0 text-gray-200">
                  <div className="border-t border-purple-700 pt-4 opacity-0 animate-fadeIn">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Animated accent elements */}
      <div className="absolute bottom-10 left-10 w-20 h-1 bg-blue-400 rounded-full opacity-70"></div>
      <div className="absolute top-20 right-10 w-12 h-1 bg-purple-400 rounded-full opacity-70"></div>
    </div>
  );
}

