# PIDR-2017
Projet interdisciplinaire de recherche de HUSSON Graziella et VIGNERON Joris

## A propos de ce projet
Ce projet est le Projet interdisciplinaire de recherche de HUSSON Graziella et VIGNERON Joris. Il est inscrit dans le cadre de la deuxième année à TELECOM Nancy.
Il permet un premier contact concret avec la recherche menée dans les laboratoires de l'Université, en particulier le LORIA. Il s'agit d'un projet encadré par des chercheurs qui inclue une partie recherche bibliographique 
et une partie programmation. Ce projet ne se déroule pas nécessairement en laboratoire et concerne des aspects liés à différentes disciplines autour de l'informatique. 

Il existe un réseau de neurone qui permet, à partir d’un corpus, d’obtenir un langage simplifié plus facilement compréhensible par une machine. 
Cependant, pour pouvoir éprouver ce réseau de neurone il est nécessaire tout d’abord de préparer ce corpus. La volonté du projet n’est pas de se baser sur un corpus réalisé par les chercheurs mais par des intervenants extérieurs aux projets : étudiants, écolier, chercheurs,....

Pour cela il est nécessaire de mettre en place une plateforme de type web qui permettra dans un premier temps de coder simplement via des interfaces de programmation simplifiés telle que Scratch, Snapl ou encore PLM. Ensuite, la séquence de code devra être utilisée sous forme d’une vidéo qui sera ensuite exportée vers une autre page web.  
Cette seconde page web devra réaliser donc 2 choses : 
* la première permettre la visualisation des vidéos programmer ultérieurement
* la seconde offrir la possibilité aux utilisateurs de laisser des commentaires sur la vidéo, qui seront récupérés.
Une fois ces pages web réalisées nous serons en mesure de récolter le corpus qui alimentera ensuite le réseau de neurone. 

## Auteurs
Ce projet a été réalisé par :
```
HUSSON Graziella
VIGNERON Joris
```

## Pour commencer
Il s'agit du projet "PLM", s'inscrivant dans le cadre des recherches d'une des équipes du Loria.
La "Programmer's Learning Machine (PLM)" est une plateforme dédiée à l'apprentissage de l'informatique. 
Cette plateforme permet aux professeurs de créer des environnements, des "mondes" simples pour apprendre à programmer.
Elle contient un environnement graphique intégré, permettant d'avoir un aperçu du code créé par l'étudiant. Lui permettant ainsi d'être autonome et plus efficace.
[Visitez le site web de la PLM](http://www.loria.fr/~quinson/Teaching/PLM/).

Le projet webPLM a aussi été utilisé et modifié. Il s'agit d'une interface web pour le projet PLM. 
Il utilise le [Play Framework](https://www.playframework.com/) comme back-end et [AngularJS](https://angularjs.org/) comme front-end.

### Prérequis et installation

D'abord, extraire l'archive de ce repository sur la machine censée faire office de serveur. 
Le [Play Framework] doit être préalablement installé (https://www.playframework.com/documentation/2.3.x/Installing).
S'assurer de la présence d'une instance de mongodb sur le serveur. Si ce n'est pas le cas, l'installer avec la commande ```apt-get install mongodb```

### Lancement

Démarrer le service associé à mongodb à l'aide de la commande "service mongodb start"
ATTENTION : il faut avoir 3GB de libre sur le disque pour lancer cette ligne de commande, mongodb réserve cet espace. Pour vérifier que cela a bien marché, utilisez la commande ```mongo```.

Vous pouvez lancer l'application en mode production en utilisant la commande ```./activator start ``` depuis le dossier webPLM.

Si vous préferez la lancer en mode debug (où tout se recharge automatiquement quand les fichiers changent), utilisez ```activator ~run```.
Supprimez le ~ pour recharger uniquement lorsque la page du navigateur est rechargée.

Pour accéder à l'application, aller à la page web <http://localhost:9000> 
Si vous voulez utiliser le port 8080 par exemple, utilisez ```activator "~run
8080"```


## License

Ce projet est sous license MIT 

## Sources

* Hat tip to anyone who's code was used
* Inspiration
* etc
