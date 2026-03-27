    /**
 * ================================================================
 * MICROSERVICES EXAM — script.js
 * Architecture et Développement Microservices avec Spring Boot
 * ================================================================
 * Types: qcm | tf | short | code | pratique
 * ================================================================
 */

// ================================================
//  QUESTION BANK (30 questions from all 7 chapters)
// ================================================
const QUESTION_BANK = [

  // ---------- CHAPITRE 1 : Introduction Microservices ----------
  {
    id: 1, type: 'qcm',
    section: 'Chapitre 1 — Introduction',
    question: "Dans une architecture monolithique, comment toutes les fonctionnalités sont-elles déployées ?",
    options: [
      "Chaque fonctionnalité est déployée dans son propre conteneur Docker.",
      "L'ensemble de l'application est compilé et déployé comme une seule unité indivisible.",
      "Chaque équipe déploie son module indépendamment via un API Gateway.",
      "Les fonctionnalités sont déployées en microservices orchestrés par Kubernetes."
    ],
    correct: 1,
    explanation: "Un monolithe est une seule unité indivisible : tout le code est compilé ensemble et déployé sur un seul serveur."
  },
  {
    id: 2, type: 'tf',
    section: 'Chapitre 1 — Introduction',
    question: "VRAI ou FAUX — Dans une architecture monolithique, il est facile de faire évoluer (scaler) uniquement la fonctionnalité qui subit le plus de trafic.",
    options: ["VRAI", "FAUX"],
    correct: 1,
    explanation: "FAUX. Dans un monolithe, si la Feature A reçoit plus de trafic, on doit dupliquer tout le monolithe même si B et C n'en ont pas besoin."
  },
  {
    id: 3, type: 'qcm',
    section: 'Chapitre 1 — Introduction',
    question: "Parmi les avantages suivants, lequel appartient à l'architecture monolithique et NON aux microservices ?",
    options: [
      "Scalabilité indépendante de chaque fonctionnalité.",
      "Liberté de choisir un langage différent par module.",
      "Simplicité de déploiement (un seul fichier .jar ou .war).",
      "Isolation des pannes entre services."
    ],
    correct: 2,
    explanation: "Le monolithe se déploie en un seul fichier (.jar/.war), ce qui simplifie le déploiement initial. Les autres options sont des avantages des microservices."
  },
  {
    id: 4, type: 'tf',
    section: 'Chapitre 1 — Introduction',
    question: "VRAI ou FAUX — Dans une architecture microservices, chaque service peut utiliser un langage de programmation différent.",
    options: ["VRAI", "FAUX"],
    correct: 0,
    explanation: "VRAI. C'est une des libertés fondamentales des microservices : chaque équipe peut choisir la technologie adaptée à son service."
  },
  {
    id: 5, type: 'qcm',
    section: 'Chapitre 1 — Introduction',
    question: "Quelle contrainte majeure lie les équipes dans une architecture monolithique ?",
    options: [
      "Chaque équipe doit maintenir son propre serveur de base de données.",
      "Les équipes sont interdépendantes et doivent utiliser le même langage et les mêmes versions.",
      "Chaque module communique via des API REST asynchrones.",
      "Les équipes ne partagent jamais de code source."
    ],
    correct: 1,
    explanation: "Dans un monolithe, les équipes sont fortement couplées. Une modification dans un module peut casser un autre, et tous doivent utiliser le même langage et stack technique."
  },

  // ---------- CHAPITRE 2 : Spring Boot & Premier Microservice ----------
  {
    id: 6, type: 'qcm',
    section: 'Chapitre 2 — Spring Boot',
    question: "Quel outil en ligne est utilisé pour initialiser rapidement un projet Spring Boot ?",
    options: [
      "https://mvnrepository.com",
      "https://start.spring.io",
      "https://hub.docker.com",
      "https://gradle.org/releases"
    ],
    correct: 1,
    explanation: "Spring Initializr (start.spring.io) permet de composer un projet Spring Boot avec les dépendances choisies, comme un repas à composer."
  },
  {
    id: 7, type: 'tf',
    section: 'Chapitre 2 — Spring Boot',
    question: "VRAI ou FAUX — L'annotation @SpringBootApplication est une combinaison de @Configuration, @EnableAutoConfiguration et @ComponentScan.",
    options: ["VRAI", "FAUX"],
    correct: 0,
    explanation: "VRAI. @SpringBootApplication encapsule ces trois annotations essentielles qui configurent, activent l'auto-configuration et scannent les composants."
  },
  {
    id: 8, type: 'qcm',
    section: 'Chapitre 2 — Spring Boot',
    question: "Dans un projet Spring Boot, quel rôle joue la bibliothèque Jackson ?",
    options: [
      "Elle gère les transactions de base de données.",
      "Elle sert de serveur web embarqué (remplace Tomcat).",
      "Elle convertit les objets Java en JSON et vice-versa (sérialisation/désérialisation).",
      "Elle gère l'injection de dépendances via @Autowired."
    ],
    correct: 2,
    explanation: "Jackson est la bibliothèque de sérialisation JSON par défaut dans Spring Boot. Elle appelle les getters pour convertir un objet Java en texte JSON."
  },
  {
    id: 9, type: 'code',
    section: 'Chapitre 2 — Spring Boot',
    question: "Que fait ce bout de code Spring Boot ?",
    code:
`@SpringBootApplication
public class MicrocommerceApplication {
  public static void main(String[] args) {
    SpringApplication.run(
      MicrocommerceApplication.class, args);
  }
}`,
    options: [
      "Il définit un contrôleur REST qui écoute sur /api.",
      "C'est le point d'entrée de l'application — il démarre le contexte Spring et le serveur Tomcat embarqué.",
      "Il configure la connexion à la base de données H2.",
      "Il initialise les migrations Flyway au démarrage."
    ],
    correct: 1,
    explanation: "C'est la classe principale de tout projet Spring Boot. @SpringBootApplication active l'auto-configuration et SpringApplication.run() lance le serveur Tomcat embarqué."
  },
  {
    id: 10, type: 'qcm',
    section: 'Chapitre 2 — Spring Boot',
    question: "Quel est le rôle du starter 'spring-boot-starter-web' dans le fichier pom.xml ?",
    options: [
      "Il ajoute uniquement le support des templates Thymeleaf.",
      "Il inclut Spring MVC, Tomcat embarqué et le support RESTful en une seule dépendance.",
      "Il installe automatiquement Spring Security dans le projet.",
      "Il fournit les drivers JDBC pour toutes les bases de données."
    ],
    correct: 1,
    explanation: "spring-boot-starter-web est un 'starter' qui regroupe Spring MVC, RESTful et le serveur Tomcat embarqué. Un seul ajout dans pom.xml suffit."
  },

  // ---------- CHAPITRE 3 : REST, Model, Contrôleur ----------
  {
    id: 11, type: 'qcm',
    section: 'Chapitre 3 — REST & Modèle',
    question: "Quelle annotation Spring permet de lier un segment variable d'une URL à un paramètre de méthode Java ?",
    options: [
      "@RequestParam",
      "@RequestBody",
      "@PathVariable",
      "@RequestHeader"
    ],
    correct: 2,
    explanation: "@PathVariable extrait une valeur depuis le chemin de l'URL. Ex : @GetMapping('/Produits/{id}') et @PathVariable int id."
  },
  {
    id: 12, type: 'code',
    section: 'Chapitre 3 — REST & Modèle',
    question: "Quelle est la valeur JSON retournée par cette méthode si l'URL appelée est /Produits/42 ?",
    code:
`@GetMapping(value = "/Produits/{id}")
public Product afficherUnProduit(
    @PathVariable int id) {
  return new Product(id, "Aspirateur", 100);
}`,
    options: [
      '{"id":42,"nom":"Aspirateur","prix":100}',
      '"Aspirateur"',
      '{"product": {"id":42}}',
      'Une exception NullPointerException'
    ],
    correct: 0,
    explanation: "Spring Boot + Jackson sérialisent automatiquement l'objet Product retourné en JSON. Le @PathVariable injecte 42 comme id."
  },
  {
    id: 13, type: 'tf',
    section: 'Chapitre 3 — REST & Modèle',
    question: "VRAI ou FAUX — Un Model (Bean Java) doit obligatoirement avoir un constructeur sans argument et des getters/setters pour être sérialisé par Jackson.",
    options: ["VRAI", "FAUX"],
    correct: 0,
    explanation: "VRAI. Jackson appelle le constructeur sans argument pour instancier l'objet, puis les getters pour lire les valeurs lors de la sérialisation."
  },
  {
    id: 14, type: 'qcm',
    section: 'Chapitre 3 — REST & Modèle',
    question: "Quel est le rôle de l'annotation @RestController dans Spring Boot ?",
    options: [
      "Elle indique que la classe est un composant de persistance (@Repository équivalent).",
      "Elle combine @Controller et @ResponseBody, indiquant que chaque méthode retourne directement une réponse JSON/XML.",
      "Elle active la sécurité HTTP de base sur tous les endpoints.",
      "Elle configure le mapping des URL dans le fichier application.properties."
    ],
    correct: 1,
    explanation: "@RestController = @Controller + @ResponseBody. Cela signifie que les valeurs de retour sont directement sérialisées en JSON (via Jackson) et envoyées au client."
  },

  // ---------- CHAPITRE 4 : DAO & Architecture en Couches ----------
  {
    id: 15, type: 'qcm',
    section: 'Chapitre 4 — DAO',
    question: "Que signifie l'acronyme DAO ?",
    options: [
      "Data Annotation Object",
      "Dependency Access Object",
      "Data Access Object",
      "Database Auto-Operation"
    ],
    correct: 2,
    explanation: "DAO = Data Access Object. C'est un Design Pattern qui isole la couche de logique métier de la couche de persistance."
  },
  {
    id: 16, type: 'tf',
    section: 'Chapitre 4 — DAO',
    question: "VRAI ou FAUX — L'annotation @Repository indique à Spring qu'une classe est dédiée à l'accès aux données et lui permet de transformer les exceptions de BD en exceptions Spring.",
    options: ["VRAI", "FAUX"],
    correct: 0,
    explanation: "VRAI. @Repository remplit deux rôles : signaler le rôle de la classe et activer la traduction automatique des exceptions JDBC en DataAccessException Spring."
  },
  {
    id: 17, type: 'qcm',
    section: 'Chapitre 4 — DAO',
    question: "Dans l'architecture en couches présentée dans le cours, quelle couche contient les règles métier (calcul de TVA, vérification des droits) ?",
    options: [
      "Couche Controller (@RestController)",
      "Couche DAO / Repository",
      "Couche Service (@Service)",
      "Couche Model (Entité)"
    ],
    correct: 2,
    explanation: "La couche Service (@Service) est le 'cœur du système'. Elle contient les règles métier et est indépendante du Web (réutilisable pour REST, mobile, tâches automatiques)."
  },
  {
    id: 18, type: 'pratique',
    section: 'Chapitre 4 — DAO',
    question: "Dans l'interface ProductDao du cours, trois méthodes sont définies comme 'contrat CRUD'. Lesquelles sont-elles ? (Choisissez la réponse complète et correcte)",
    options: [
      "getAll(), getById(int id), insert(Product p)",
      "findAll(), findById(int id), save(Product product)",
      "listProducts(), findOne(int id), addProduct(Product p)",
      "selectAll(), selectById(int id), update(Product p)"
    ],
    correct: 1,
    explanation: "Le cours enseigne les noms standards Spring : findAll(), findById() et save(). Ces noms respectent les conventions Spring Data JPA pour la génération automatique de SQL plus tard."
  },
  {
    id: 19, type: 'qcm',
    section: 'Chapitre 4 — DAO',
    question: "Pourquoi utilise-t-on le mot-clé `static` pour la liste de produits dans ProductDaoImpl (avant l'introduction de la BDD) ?",
    options: [
      "Pour que la liste soit accessible sans instancier la classe.",
      "Pour que la liste soit unique et partagée par toutes les instances — simulant une base de données commune.",
      "Pour améliorer les performances de sérialisation JSON.",
      "Parce que Spring exige que les champs des @Repository soient statiques."
    ],
    correct: 1,
    explanation: "Le mot-clé static garantit qu'une seule liste existe pour toute l'application, simulant une source de données partagée avant l'introduction d'une vraie BDD."
  },

  // ---------- CHAPITRE 5 : Persistance & JPA ----------
  {
    id: 20, type: 'qcm',
    section: 'Chapitre 5 — Persistance JPA',
    question: "Quel problème fondamental justifie l'utilisation de JPA dans un projet Java ?",
    options: [
      "Java ne peut pas se connecter directement à une base de données.",
      "Les objets Java (orientés objet) et les tables SQL (relationnelles) ont des structures incompatibles — JPA fait la traduction.",
      "JPA remplace complètement le besoin d'une base de données.",
      "Sans JPA, Spring Boot ne peut pas démarrer avec une dépendance BDD."
    ],
    correct: 1,
    explanation: "C'est l'impedance mismatch : Java est OO (objets, héritage) et SQL est relationnel (tables, clés). JPA est le 'traducteur' entre ces deux mondes."
  },
  {
    id: 21, type: 'tf',
    section: 'Chapitre 5 — Persistance JPA',
    question: "VRAI ou FAUX — H2 est une base de données relationnelle légère, en mémoire, idéale pour le développement et les tests avec Spring Boot.",
    options: ["VRAI", "FAUX"],
    correct: 0,
    explanation: "VRAI. H2 est une BDD Java en mémoire (in-memory), parfaite pour les tests. Elle ne nécessite aucune installation externe et se réinitialise à chaque démarrage."
  },
  {
    id: 22, type: 'qcm',
    section: 'Chapitre 5 — Persistance JPA',
    question: "Quelle annotation JPA transforme une classe Java en entité liée à une table SQL ?",
    options: ["@Table", "@Entity", "@Model", "@Persistent"],
    correct: 1,
    explanation: "@Entity (javax.persistence.Entity) indique à JPA que la classe est le portrait craché d'une table SQL. Hibernate l'utilise pour créer ou mapper la table."
  },
  {
    id: 23, type: 'qcm',
    section: 'Chapitre 5 — Persistance JPA',
    question: "Dans la 'Pyramide de la Persistance' du cours, quel est le rôle d'Hibernate ?",
    options: [
      "C'est l'interface Repository que le développeur utilise directement.",
      "C'est le moteur (traducteur) qui convertit les appels JPA en vraies requêtes SQL.",
      "C'est le tuyau physique de connexion JDBC.",
      "C'est la norme (API) qui définit les règles du jeu de la persistance."
    ],
    correct: 1,
    explanation: "Dans la pyramide : Application → Spring Data JPA → JPA (norme) → Hibernate (moteur/traducteur) → JDBC (tuyau). Hibernate traduit les ordres JPA en SQL."
  },

  // ---------- CHAPITRE 6 & 7 : Spring Data JPA ----------
  {
    id: 24, type: 'qcm',
    section: 'Chapitres 6-7 — Spring Data JPA',
    question: "Comment un développeur crée-t-il un Repository Spring Data JPA pour l'entité Product (clé primaire Integer) ?",
    options: [
      "public class ProductDao extends AbstractDao<Product, Integer>",
      "public interface ProductDao extends JpaRepository<Product, Integer>",
      "@Repository public class ProductDao implements CrudOperations",
      "public interface ProductDao implements Repository<Product>"
    ],
    correct: 1,
    explanation: "On crée une interface qui hérite de JpaRepository<Entité, TypeClé>. Spring génère automatiquement l'implémentation (un Proxy) au démarrage."
  },
  {
    id: 25, type: 'tf',
    section: 'Chapitres 6-7 — Spring Data JPA',
    question: "VRAI ou FAUX — Avec Spring Data JPA, l'appel à productDao.findAll() génère automatiquement la requête SQL : SELECT * FROM product.",
    options: ["VRAI", "FAUX"],
    correct: 0,
    explanation: "VRAI. Spring crée un Proxy qui, lors de l'appel à findAll(), génère et exécute automatiquement SELECT * FROM product via Hibernate."
  },
  {
    id: 26, type: 'qcm',
    section: 'Chapitres 6-7 — Spring Data JPA',
    question: "Parmi les méthodes suivantes, laquelle N'est PAS fournie automatiquement par JpaRepository ?",
    options: [
      "findAll()",
      "save(Product p)",
      "deleteById(int id)",
      "executeRawSQL(String query)"
    ],
    correct: 3,
    explanation: "JpaRepository fournit findAll(), save(), deleteById(), count(), existsById(), etc. executeRawSQL() n'existe pas — pour du SQL custom on utilise @Query."
  },
  {
    id: 27, type: 'pratique',
    section: 'Chapitres 6-7 — Spring Data JPA',
    question: "Selon les '3 bénéfices majeurs' de l'architecture en couches présentés dans le cours, lequel de ces bénéfices est CORRECTEMENT décrit ?",
    options: [
      "Maintenabilité : pour changer de BDD (H2→MySQL), on modifie uniquement la couche Persistence.",
      "Testabilité : on doit toujours démarrer un vrai serveur web pour tester la couche Service.",
      "Réutilisabilité : chaque contrôleur doit avoir son propre Repository, ils ne peuvent pas être partagés.",
      "Performance : l'architecture en couches accélère toutes les requêtes SQL de 10×."
    ],
    correct: 0,
    explanation: "Le cours énumère les 3 bénéfices : Maintenabilité (changer de BDD ne touche que la couche Persistence), Testabilité (tester le Service sans BDD via Mocks), Réutilisabilité (partager Services et Repos)."
  },
  {
    id: 28, type: 'code',
    section: 'Chapitres 6-7 — Spring Data JPA',
    question: "Quelle requête SQL Spring Data JPA génère-t-elle automatiquement pour cette méthode définie dans ProductDao ?",
    code: `List<Product> findByNomContaining(String mot);`,
    options: [
      "SELECT * FROM product WHERE nom = :mot",
      "SELECT * FROM product WHERE nom LIKE '%mot%'",
      "INSERT INTO product (nom) VALUES (?)",
      "UPDATE product SET nom = ? WHERE id = ?"
    ],
    correct: 1,
    explanation: "Spring Data JPA parse le nom de la méthode : findBy → WHERE, Nom → colonne nom, Containing → LIKE '%...%'. La requête générée est : SELECT * FROM product WHERE nom LIKE '%mot%'."
  },
  {
    id: 29, type: 'qcm',
    section: 'Chapitres 6-7 — Spring Data JPA',
    question: "Quelle est la meilleure pratique pour injecter un Repository dans un Controller, selon le cours ?",
    options: [
      "Utiliser @Autowired directement sur le champ (field injection).",
      "Créer l'instance manuellement avec new ProductDaoImpl().",
      "Utiliser l'injection par constructeur avec le mot-clé final pour garantir l'initialisation.",
      "Utiliser une variable static partagée entre tous les contrôleurs."
    ],
    correct: 2,
    explanation: "Le cours recommande l'injection par constructeur + final : 'le contrôleur est prêt à l'emploi dès sa naissance. C'est la méthode la plus sûre et la plus professionnelle.'"
  },
  {
    id: 30, type: 'short',
    section: 'Général — Synthèse',
    question: "Expliquez en 2-3 phrases le 'Flux d'exécution' complet lorsqu'un client appelle GET /Produits dans une application Spring Boot connectée à H2 via Spring Data JPA.",
    options: [], // short answer — no multiple choice
    correct: null,
    explanation: "Réponse attendue : (1) Le client envoie une requête HTTP GET. (2) Le @RestController reçoit la requête et appelle productDao.findAll(). (3) Spring Data JPA génère SELECT * FROM product, l'envoie à H2. (4) H2 retourne les lignes, JPA les transforme en List<Product>. (5) Jackson sérialise la liste en JSON et Spring répond au client."
  }
];

// ================================================
//  CONFIGURATION
// ================================================
const EXAM_DURATION = 45 * 60; // seconds
let questions        = [];      // shuffled questions
let currentIndex     = 0;
let userAnswers      = {};      // { questionId: answerIndex | 'text' }
let timerInterval    = null;
let timeLeft         = EXAM_DURATION;
let examStartTime    = null;
let submitted        = false;

// ================================================
//  UTILITY — Fisher-Yates Shuffle
// ================================================
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Build questions: shuffle order + shuffle options (for qcm/tf)
function buildQuestions() {
  questions = shuffle(QUESTION_BANK).map(q => {
    if ((q.type === 'qcm' || q.type === 'tf' || q.type === 'code' || q.type === 'pratique') && q.options.length > 0) {
      // map original index to shuffled index
      const indexed = q.options.map((opt, i) => ({ opt, origIdx: i }));
      const shuffledOpts = shuffle(indexed);
      return {
        ...q,
        options: shuffledOpts.map(x => x.opt),
        correct: shuffledOpts.findIndex(x => x.origIdx === q.correct)
      };
    }
    return { ...q };
  });

  document.getElementById('totalQCount').textContent = questions.length;
  document.getElementById('qTotal').textContent = questions.length;
  document.getElementById('finalTotal').textContent = `/${questions.length}`;
}

// ================================================
//  TIMER
// ================================================
function startTimer() {
  examStartTime = Date.now();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      submitExam(true);
    }
  }, 1000);
}

function updateTimerDisplay() {
  const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const s = (timeLeft % 60).toString().padStart(2, '0');
  document.getElementById('timerDisplay').textContent = `${m}:${s}`;

  // SVG ring
  const ring = document.getElementById('timerRing');
  const pct = timeLeft / EXAM_DURATION;
  const circumference = 100;
  ring.style.strokeDashoffset = circumference * (1 - pct);

  ring.classList.remove('warning', 'danger');
  if (pct < .15) ring.classList.add('danger');
  else if (pct < .35) ring.classList.add('warning');
}

// ================================================
//  RENDER QUESTION
// ================================================
function renderQuestion(index, direction = 'enter') {
  const q = questions[index];
  const card = document.getElementById('qCard');

  // Animate out then in
  card.classList.remove('leaving', 'entering');
  void card.offsetWidth; // reflow
  card.classList.add('entering');

  // Badge
  const typeBadge = document.getElementById('qTypeBadge');
  const typeLabels = { qcm: 'QCM', tf: 'Vrai / Faux', short: 'Réponse courte', code: 'Code', pratique: 'Pratique' };
  typeBadge.textContent = typeLabels[q.type] || 'Question';
  typeBadge.className = 'q-type-badge ' + q.type;

  // Number / section
  document.getElementById('qNumLabel').textContent = index + 1;
  document.getElementById('qCurrent').textContent  = index + 1;
  document.getElementById('sectionTag').textContent = q.section;

  // Question text
  document.getElementById('qText').textContent = q.question;

  // Code block
  const codeEl = document.getElementById('qCode');
  if (q.code) {
    codeEl.textContent = q.code;
    codeEl.style.display = 'block';
  } else {
    codeEl.style.display = 'none';
  }

  // Answer zone
  const zone = document.getElementById('answerZone');
  const shortInput = document.getElementById('shortInput');
  zone.innerHTML = '';

  if (q.type === 'short') {
    zone.style.display = 'none';
    shortInput.style.display = 'block';
    shortInput.value = userAnswers[q.id] || '';
    if (submitted) shortInput.disabled = true;
  } else {
    zone.style.display = 'flex';
    shortInput.style.display = 'none';
    const letters = ['A', 'B', 'C', 'D', 'E'];
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';

      // Determine state
      const isSelected = userAnswers[q.id] === i;
      const isCorrect  = i === q.correct;
      if (submitted) {
        btn.disabled = true;
        if (isCorrect) btn.classList.add('correct');
        else if (isSelected && !isCorrect) btn.classList.add('wrong');
      } else if (isSelected) {
        btn.classList.add('selected');
      }

      btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span>${opt}</span>`;
      if (!submitted) {
        btn.addEventListener('click', () => selectOption(q.id, i, index));
      }
      zone.appendChild(btn);
    });
  }

  // Progress
  updateProgress(index);
  updateDots(index);
  updateNav(index);
  updateLiveScore();
}

// ================================================
//  OPTION SELECTION
// ================================================
function selectOption(qId, optIndex, qIndex) {
  userAnswers[qId] = optIndex;
  renderQuestion(qIndex);
}

// ================================================
//  PROGRESS & DOTS
// ================================================
function updateProgress(index) {
  const pct = ((index + 1) / questions.length) * 100;
  document.getElementById('progressBar').style.width = pct + '%';
}

function updateDots(currentIdx) {
  const container = document.getElementById('qDots');
  container.innerHTML = '';
  questions.forEach((q, i) => {
    const dot = document.createElement('div');
    dot.className = 'q-dot';
    if (submitted) {
      if (q.type === 'short') {
        dot.classList.add(userAnswers[q.id] ? 'answered' : 'skip');
      } else {
        if (userAnswers[q.id] === undefined) dot.classList.add('skip');
        else if (userAnswers[q.id] === q.correct) dot.classList.add('correct');
        else dot.classList.add('wrong');
      }
    } else if (userAnswers[q.id] !== undefined) {
      dot.classList.add('answered');
    }
    if (i === currentIdx) dot.classList.add('current');
    dot.title = `Q${i + 1}`;
    dot.addEventListener('click', () => {
      currentIndex = i;
      renderQuestion(i);
    });
    container.appendChild(dot);
  });
}

function updateNav(index) {
  document.getElementById('prevBtn').disabled = index === 0;
  const isLast = index === questions.length - 1;
  document.getElementById('nextBtn').textContent = isLast ? 'Fin →' : 'Suivant →';
  document.getElementById('nextBtn').disabled = false;
  document.getElementById('submitBtn').style.display = (isLast && !submitted) ? 'block' : 'none';
}

function updateLiveScore() {
  const answered = Object.keys(userAnswers).length;
  document.getElementById('liveScore').textContent = `${answered} / ${questions.length}`;
}

// ================================================
//  NAVIGATION
// ================================================
document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion(currentIndex);
  }
});

document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    renderQuestion(currentIndex);
  }
});

// ================================================
//  SHORT ANSWER — save on input
// ================================================
document.getElementById('shortInput').addEventListener('input', (e) => {
  const q = questions[currentIndex];
  if (q.type === 'short') {
    userAnswers[q.id] = e.target.value;
    updateDots(currentIndex);
    updateLiveScore();
  }
});

// ================================================
//  SUBMIT
// ================================================
document.getElementById('submitBtn').addEventListener('click', () => {
  const unanswered = questions.filter(q => userAnswers[q.id] === undefined).length;
  if (unanswered > 0) {
    const go = confirm(`Vous avez ${unanswered} question(s) sans réponse. Voulez-vous quand même soumettre ?`);
    if (!go) return;
  }
  submitExam(false);
});

function submitExam(timeOut = false) {
  submitted = true;
  clearInterval(timerInterval);

  // Calculate score
  let correct = 0, wrong = 0, skipped = 0;
  questions.forEach(q => {
    if (q.type === 'short') {
      // short answers counted as "answered" but not auto-graded
      if (userAnswers[q.id] && userAnswers[q.id].trim().length > 2) correct++;
      else skipped++;
    } else {
      if (userAnswers[q.id] === undefined) skipped++;
      else if (userAnswers[q.id] === q.correct) correct++;
      else wrong++;
    }
  });

  // Time taken
  const elapsed = examStartTime ? Math.floor((Date.now() - examStartTime) / 1000) : EXAM_DURATION - timeLeft;
  const em = Math.floor(elapsed / 60).toString().padStart(2, '0');
  const es = (elapsed % 60).toString().padStart(2, '0');

  showResults(correct, wrong, skipped, `${em} min ${es} sec`, timeOut);
}

// ================================================
//  RESULTS
// ================================================
function showResults(correct, wrong, skipped, timeTaken, timeOut) {
  const total = questions.length;
  const pct = correct / total;

  // Switch screens
  document.getElementById('examScreen').classList.remove('active');
  const res = document.getElementById('resultsScreen');
  res.classList.add('active');

  // Trophy & Score
  const trophies = ['😟', '🤔', '📚', '👍', '🌟', '🏆'];
  const tier = Math.min(Math.floor(pct * 5), 5);
  document.getElementById('trophyIcon').textContent = trophies[tier];

  document.getElementById('finalScore').textContent  = correct;
  document.getElementById('correctCount').textContent = correct;
  document.getElementById('wrongCount').textContent   = wrong;
  document.getElementById('skipCount').textContent    = skipped;
  document.getElementById('timeTaken').textContent    = timeTaken;

  // Animate arc
  const circumference = 326.7;
  const arc = document.getElementById('scoreArc');
  setTimeout(() => {
    arc.style.strokeDashoffset = circumference * (1 - pct);
    if (pct >= .7) arc.style.stroke = 'var(--correct)';
    else if (pct >= .5) arc.style.stroke = 'var(--accent2)';
    else arc.style.stroke = 'var(--wrong)';
  }, 400);

  // Feedback
  const feedbacks = [
    "Courage ! Revoyez les fondamentaux de Spring Boot et des microservices.",
    "Pas mal, mais il reste du travail. Relisez les chapitres sur JPA.",
    "Bien ! Quelques lacunes sur Spring Data JPA — continuez à pratiquer.",
    "Très bien ! Vous maîtrisez l'essentiel de l'architecture microservices.",
    "Excellent travail ! Spring Boot n'a presque plus de secrets pour vous.",
    "Parfait ! Maîtrise complète — prêt(e) pour le projet microservices !"
  ];
  document.getElementById('feedbackMsg').textContent =
    (timeOut ? "⏱ Temps écoulé ! " : "") + feedbacks[tier];

  // Build review list
  buildReview();
}

function buildReview() {
  const list = document.getElementById('reviewList');
  list.innerHTML = '';

  questions.forEach((q, i) => {
    const item = document.createElement('div');
    item.className = 'review-item';

    let status = 'skip-item';
    if (q.type !== 'short') {
      if (userAnswers[q.id] === q.correct) status = 'correct-item';
      else if (userAnswers[q.id] !== undefined) status = 'wrong-item';
    } else {
      status = userAnswers[q.id] ? 'correct-item' : 'skip-item';
    }
    item.classList.add(status);

    let html = `<div class="review-q">
      <strong>Q${i + 1} — ${q.section}</strong>
      ${q.question}
    </div>
    <div class="review-answers">`;

    if (q.type === 'short') {
      html += `<div class="review-row"><span class="tag given-tag">Votre réponse</span><span>${userAnswers[q.id] || '<em>Sans réponse</em>'}</span></div>`;
      html += `<div class="review-row"><span class="tag correct-tag">Réponse attendue</span><span>${q.explanation}</span></div>`;
    } else {
      const letters = ['A','B','C','D'];
      if (userAnswers[q.id] !== undefined) {
        html += `<div class="review-row">
          <span class="tag ${userAnswers[q.id] === q.correct ? 'correct-tag' : 'wrong-tag'}">Votre réponse</span>
          <span><strong>${letters[userAnswers[q.id]]}</strong> — ${q.options[userAnswers[q.id]]}</span>
        </div>`;
      }
      if (userAnswers[q.id] !== q.correct) {
        html += `<div class="review-row">
          <span class="tag correct-tag">Bonne réponse</span>
          <span><strong>${letters[q.correct]}</strong> — ${q.options[q.correct]}</span>
        </div>`;
      }
      html += `<div class="review-row">
        <span class="tag given-tag">Explication</span>
        <span>${q.explanation}</span>
      </div>`;
    }

    html += `</div>`;
    item.innerHTML = html;
    list.appendChild(item);
  });
}

// Toggle review
document.getElementById('toggleReview').addEventListener('click', () => {
  const list = document.getElementById('reviewList');
  const btn  = document.getElementById('toggleReview');
  const open = list.style.display !== 'none';
  list.style.display = open ? 'none' : 'flex';
  btn.textContent = open ? 'Afficher ▾' : 'Masquer ▴';
});

// Review button
document.getElementById('reviewBtn').addEventListener('click', () => {
  const list = document.getElementById('reviewList');
  list.style.display = 'flex';
  document.getElementById('toggleReview').textContent = 'Masquer ▴';
  list.scrollIntoView({ behavior: 'smooth' });
});

// ================================================
//  RESTART
// ================================================
document.getElementById('restartBtn').addEventListener('click', () => {
  // Reset state
  userAnswers  = {};
  currentIndex = 0;
  submitted    = false;
  timeLeft     = EXAM_DURATION;
  clearInterval(timerInterval);

  document.getElementById('resultsScreen').classList.remove('active');
  document.getElementById('examScreen').classList.remove('active');

  // Re-show landing
  document.getElementById('landingScreen').classList.add('active');

  // Re-enable interactions
  document.getElementById('shortInput').disabled = false;
  document.getElementById('timerDisplay').textContent = '45:00';
  document.getElementById('progressBar').style.width = '0%';
  document.getElementById('scoreArc').style.strokeDashoffset = '326.7';
  document.getElementById('reviewList').style.display = 'none';
  document.getElementById('toggleReview').textContent = 'Afficher ▾';
});

// ================================================
//  START EXAM
// ================================================
document.getElementById('startBtn').addEventListener('click', () => {
  buildQuestions();
  document.getElementById('landingScreen').classList.remove('active');
  document.getElementById('examScreen').classList.add('active');
  renderQuestion(0);
  startTimer();
  updateTimerDisplay();
});

// ================================================
//  DARK MODE
// ================================================
document.getElementById('darkToggle').addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.documentElement.setAttribute('data-theme', isDark ? '' : 'dark');
  document.getElementById('darkIcon').textContent = isDark ? '🌙' : '☀️';
});

// ================================================
//  ANTI-CHEAT: disable right-click & selection
// ================================================
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('copy',        e => e.preventDefault());
document.addEventListener('keydown', e => {
  // Block Ctrl+C, Ctrl+A, F12, Ctrl+Shift+I
  if ((e.ctrlKey && ['c','a','u','s'].includes(e.key.toLowerCase())) ||
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && e.key === 'I')) {
    e.preventDefault();
  }
});

// ================================================
//  KEYBOARD NAVIGATION
// ================================================
document.addEventListener('keydown', e => {
  const screen = document.getElementById('examScreen');
  if (!screen.classList.contains('active') || submitted) return;

  const q = questions[currentIndex];
  if (q && (q.type === 'qcm' || q.type === 'tf' || q.type === 'code' || q.type === 'pratique')) {
    const map = { '1': 0, '2': 1, '3': 2, '4': 3, 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
    if (map[e.key.toLowerCase()] !== undefined && map[e.key.toLowerCase()] < q.options.length) {
      selectOption(q.id, map[e.key.toLowerCase()], currentIndex);
    }
  }
  if (e.key === 'ArrowRight' || e.key === 'Enter') {
    if (currentIndex < questions.length - 1) { currentIndex++; renderQuestion(currentIndex); }
  }
  if (e.key === 'ArrowLeft') {
    if (currentIndex > 0) { currentIndex--; renderQuestion(currentIndex); }
  }
});
