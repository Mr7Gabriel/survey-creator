import { editorLocalization } from "survey-creator-core";

var frenchTranslation = {
  //Survey templates
  survey: {
    edit: "Éditer",
    dropQuestion: "Déposer votre question ici.",
    copy: "Copier",
    addToToolbox: "Ajouter à la boîte à outils",
    deletePanel: "Supprimer le panneau",
    deleteQuestion: "Supprimer la question",
    convertTo: "Convertir en",
  },
  //questionTypes
  qt: {
    default: "Par défaut",
    checkbox: "Cases à cocher",
    comment: "Commentaire",
    imagepicker: "Choix d'image",
    dropdown: "Liste déroulante",
    file: "Fichier",
    html: "HTML",
    matrix: "Matrice (choix unique)",
    matrixdropdown: "Matrice (choix multiples)",
    matrixdynamic: "Matrice (lignes dynamiques)",
    multipletext: "Champ multilignes",
    panel: "Panneau",
    paneldynamic: "Panneau (panneaux dynamiques)",
    radiogroup: "Boutons radio",
    rating: "Évaluation",
    text: "Champ texte",
    boolean: "Booléen",
    expression: "Expression",
  },
  //Strings in Editor
  ed: {
    survey: "Questionnaire",
    editSurvey: "Éditer le questionnaire",
    settings: "Configuration du questionnaire",
    opjectPropertiesHeader: "Propriétés",
    showObjectProperties: "Afficher les propriétés",
    hideObjectProperties: "Cacher les propriétés",
    addNewPage: "Ajouter une page",
    moveRight: "Défiler à droite",
    moveLeft: "Défiler à gauche",
    deletePage: "Supprimer une page",
    editPage: "Éditer une page",
    edit: "Éditer",
    newPageName: "page",
    newQuestionName: "question",
    newPanelName: "panneau",
    newTextItemName: "texte",
    testSurvey: "Tester le questionnaire",
    testSurveyAgain: "Tester à nouveau le questionnaire",
    testSurveyWidth: "Largeur du questionnaire : ",
    embedSurvey: "Intégrer le questionnaire",
    translation: "Traduction",
    saveSurvey: "Sauvegarder le questionnaire",
    designer: "Éditeur de questionnaire",
    jsonEditor: "Éditer JSON",
    undo: "Annuler",
    redo: "Rétablir",
    options: "Options",
    generateValidJSON: "Générer un JSON valide",
    generateReadableJSON: "Générer un JSON lisible",
    toolbox: "Boîte à outils",
    "property-grid": "Propriétés",
    toolboxGeneralCategory: "Général",
    delSelObject: "Supprimer l'objet sélectionné",
    editSelObject: "Éditer l'objet sélectionné",
    correctJSON: "SVP corrigez le JSON",
    surveyResults: "Résultat du questionnaire : ",
    surveyResultsTable: "Comme tableau",
    surveyResultsJson: "Comme JSON",
    resultsTitle: "Titre de la question",
    resultsName: "Nom de la question",
    resultsValue: "Valeur de la réponse",
    resultsDisplayValue: "Valeur affichée",
    modified: "Modifié",
    saving: "Sauvegarde en cours",
    saved: "Sauvegardé",
    saveError: "Erreur! Le contenu de l'éditeur n'a pas été sauvegardé.",
    translationAddLanguage: "Choisir langue à traduire",
    translationShowAllStrings: "Afficher tous les termes",
    translationShowAllPages: "Afficher toutes les pages",
    translationNoStrings:
      "Aucun terme à traduire. Veuillez modifier le filtre.",
    translationExportToSCVButton: "Exporter en CSV",
    translationImportFromSCVButton: "Importer d'un CSV",
    translationMergeLocaleWithDefault: "Fusionner {0} avec langue par défaut",
    bold: "Gras",
    italic: "Italique",
    underline: "Souligné",
    surveyPlaceHolder: "L' enquête est vide. Faites glisser un élément de la boîte à outils ou cliquez sur le bouton ci-dessous.",
    addNewQuestion: "Ajouter {0}",
    completedHtmlOnConditionItemText: "Afficher si :",
    lg: {
      //Logic tab strings
      page_visibilityName: "Visibilité de la page",
      panel_visibilityName: "Visibilité du panneau",
      panel_enableName: "Activer/désactiver le panneau",
      question_visibilityName: "Visibilité de la question",
      question_enableName: "Activer/désactiver la question",
      question_requireName: "Question facultative requise",
      trigger_completeName: "Compléter le questionnaire",
      trigger_setvalueName: "Définir la valeur de la question",
      trigger_copyvalueName: "Copier la valeur de la question",
      trigger_skipName: "Passer à la question",
      trigger_runExpressionName: "Exécuter une expression personnalisée",
      completedHtmlOnConditionName:
        "Personnaliser le texte de la page de remerciements",

      page_visibilityDescription:
        "Rendre la page visible lorsque l'expression logique renvoie 'vrai'. Sinon, la rendre invisible.",
      panel_visibilityDescription:
        "Rendre le panneau visible lorsque l'expression logique renvoie 'vrai'. Sinon, le rendre invisible.",
      panel_enableDescription:
        "Activez le panneau et tous les éléments qu'il contient lorsque l'expression logique renvoie 'vrai'. Sinon, le laisser désactivé.",
      question_visibilityDescription:
        "Rendez la question visible lorsque l'expression logique renvoie 'vrai'. Sinon, la rendre invisible.",
      question_enableDescription:
        "Activez la question lorsque l'expression logique renvoie 'vrai'. Sinon, la laisser désactivée.",
      question_requireDescription:
        "La question devient requise lorsque l'expression logique renvoie 'vrai'.",
      trigger_completeDescription:
        "Lorsque l'expression logique renvoie 'vrai', l'enquête est alors terminée et un utilisateur voit la page de remerciements.",
      trigger_setvalueDescription:
        "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value is set to the selected question.",
      trigger_copyvalueDescription:
        "Lorsque les valeurs de question, qui sont utilisées dans l'expression logique, sont modifiées et que l'expression logique renvoie 'vrai', la valeur d'une question sélectionnée est copiée dans une autre question sélectionnée.",
      trigger_skipDescription:
        "Lorsque l'expression logique renvoie 'vrai', l'enquête passe à la question sélectionnée.",
      trigger_runExpressionDescription:
        "Lorsque l'expression logique renvoie 'vrai', alors l'expression personnalisée est exécutée. Vous pouvez éventuellement définir ce résultat d'expression dans la question sélectionnée.",
      completedHtmlOnConditionDescription:
        "Si l'expression logique renvoie 'vrai', le texte par défaut de la page de remerciements est remplacé par celui que vous avez défini.",

      itemExpressionText: "Lorsque l'expression: '{0}' renvoie 'vrai':", //{0} - the expression
      page_visibilityText: "Rendre la page {0} visible", //{0} page name
      panel_visibilityText: "Rendre le panneau {0} visible", //{0} panel name
      panel_enableText: "Activer le panneau {0}", //{0} panel name
      question_visibilityText: "Rendre la question {0} visible", //{0} question name
      question_enableText: "Activer la question {0}", //{0} question name
      question_requireText: "Rendre la question {0} obligatoire", //{0} question name
      trigger_completeText: "Le questionnaire devient complété.",
      trigger_setvalueText: "Définir dans la question: {0} valeur {1}", //{0} question name, {1} setValue
      trigger_copyvalueText:
        "Copier dans la question: {0} valeur de la question {1}", //{0} and {1} question names
      trigger_skipText: "Dans le questionnaire, passez à la question {0}", //{0} question name
      trigger_runExpressionText1: "Exécuter l'expression: '{0}'", //{0} the expression
      trigger_runExpressionText2:
        " et définissez son résultat dans la question: {0}", //{0} question name
      completedHtmlOnConditionText:
        "Affichez un texte personnalisé pour la page de remerciements.",

      conditions: "Condition(s)",
      actions: "Action(s)",
      expressionEditorTitle: "Définissez le(s) condition(s)",
      actionsEditorTitle: "Définissez le(s) action(s)",

      deleteAction: "Détruire l'action",
      addNewAction: "Ajouter une nouvelle action",
      selectedActionCaption: "Sélectionnez une action à ajouter …",

      expressionInvalid:
        "L'expression logique est vide ou non valide. Corrigez s'il-vous-plaît.",
      noActionError: "Veuillez ajouter au moins une action.",
      actionInvalid: "Veuillez corriger les problèmes dans vos actions.",
      expressionSetup: "",
      actionsSetup: "",
    },
  },
  //Property names in table headers
  pel: {
    isRequired: "Obligatoire ?",
  },
  //Property Editors
  pe: {
    apply: "Appliquer",
    ok: "OK",
    save: "Enregistrer",
    cancel: "Annuler",
    reset: "Réinitialiser",
    close: "Fermer",
    delete: "Supprimer",
    addNew: "Ajouter un nouvel élément",
    addItem: "Cliquer pour ajouter un item...",
    addOther: "Autre",
    addSelectAll: "Tout sélectionner",
    addNone: "Aucun",
    removeAll: "Tout supprimer",
    edit: "Éditer",
    back: "Retourner sans enregistrer",
    backTooltip: "Retourner sans enregistrer",
    saveAndBack: "Enregistrer et retourner",
    saveAndBackTooltip: "Enregistrer et retourner",
    move: "Déplacer",
    empty: "<vide>",
    notEmpty: "<éditer la valeur>",
    editChoices: "Editer les choix",
    fastEntry: "Ajout rapide",
    formEntry: "Ajout via formulaire",
    testService: "Tester le service",
    conditionSelectQuestion: "Sélectionner une question...",
    conditionValueQuestionTitle: "Sélectionner ou saisir la valeur",
    conditionButtonAdd: "Ajouter",
    conditionButtonReplace: "Remplacer",
    conditionHelp:
      'Veuillez entrer une expression booléenne. Elle doit retourner Vrai(true) pour garder la question/page visible. Par exemple: {question1} = "valeur1" or ({question2} = 3 and {question3} < 5)',
    expressionHelp:
      "Veuillez entrer une expression. Vous pouvez utiliser des accolades pour accéder aux valeurs des questions '{question1} + {question2}', '({prix}*{quantite}) * (100 - {remise})'",
    aceEditorHelp:
      "Appuyer sur Ctrl + espace pour obtenir une aide pour la saisie d'expression",
    aceEditorRowTitle: "Ligne courante",
    aceEditorPanelTitle: "Panneau courant",
    showMore:
      "Pour plus d'informations, veuillez vous référer à la documentation",
    assistantTitle: "Questions disponibles :",
    cellsEmptyRowsColumns: "Il faut au minimum une ligne ou une colonne",
    propertyIsEmpty: "Veuillez entrer une valeur pour la propriété",
    listIsEmpty: "Ajouter un nouvel élément",
    expressionIsEmpty: "L'expression est vide",
    value: "Valeur",
    text: "Texte",
    rowid: "ID Ligne",
    imageLink: "URL de l'image",
    columnEdit: "Éditer la colonne: {0}",
    itemEdit: "Éditer l'item: {0}",
    url: "URL",
    path: "Chemin",
    valueName: "Nom de la valeur",
    titleName: "Nom du titre",
    titlePlaceholder: "Titre de la page",
    descriptionPlaceholder: "Entrer une description",
    surveyTitlePlaceholder: "Saisissez le titre de l'enquête",
    pageTitlePlaceholder: "Saisissez le titre de la page",
    pageDescriptionPlaceholder: "Entrer une description pour la page",
    surveyDescriptionPlaceholder: "Entrer une description pour l'enquête",
    showOtherItem: 'Contient un item "Autre"',
    otherText: 'Texte item "Autre"',
    showNoneItem: 'Contient un item "Aucun"',
    noneText: 'Texte item "Aucun"',
    showSelectAllItem: 'Contient un item "Tout sélectionner"',
    selectAllText: 'Texte item "Tout sélectionner"',
    choicesMin: "Valeur minimum pour les items générés automatiquement",
    choicesMax: "Valeur maximum pour les items générés automatiquement",
    choicesStep: "Différence entre items générés automatiquement",
    name: "Nom",
    title: "Titre",
    cellType: "Type de cellule",
    colCount: "Nombre de colonnes",
    choicesOrder: "Sélectionner l'ordre des choix",
    visible: "Est visible ?",
    isRequired: "Est obligatoire ?",
    isAllRowRequired: "Réponse obligatoire pour toutes les lignes",
    requiredErrorText: "Message d'erreur lorsque obligatoire",
    startWithNewLine: "Commencer avec une nouvelle ligne ?",
    rows: "Nombre de lignes",
    placeholder: "Placeholder (indice dans le champ)",
    showPreview: "L'aperçu d'image est-il affiché ?",
    storeDataAsText:
      "Stocker le contenu du fichier dans le résultat JSON sous forme de texte",
    maxSize: "Taille maximum du fichier en octets",
    imageHeight: "Hauteur de l'image",
    imageWidth: "Largeur de l'image",
    rowCount: "Nombre de lignes",
    columnLayout: "Inverser les lignes et les colonnes",
    addRowLocation: 'Emplacement bouton "Ajouter une ligne"',
    addRowText: 'Texte bouton "Ajouter une ligne"',
    removeRowText: 'Texte bouton "Supprimer une ligne"',
    rateMin: "Note minimum",
    rateMax: "Note maximum",
    rateStep: "Intervalle des notes",
    minRateDescription: "Description note minimum",
    maxRateDescription: "Description note maximum",
    inputType: "Type de champ",
    optionsCaption: "Texte par défaut",
    defaultValue: "Valeur par défaut",
    cellsDefaultRow: "Texte de cellule par défaut",
    surveyEditorTitle: "Éditer les préférences du questionnaire",
    qEditorTitle: "Éditer la question: {0}",
    maxLength: "Longueur maximum",

    buildExpression: "Construire",
    editExpression: "Editer",
    and: "Et",
    or: "Ou",
    remove: "Enlever",
    addCondition: "Ajouter une condition",

    //survey
    showTitle: "Afficher/cacher le titre",
    locale: "Langue par défaut",
    simulator: "Choisir l'appareil",
    landscapeOrientation: "Paysage",
    mode: "Mode (édition/lecture seule)",
    clearInvisibleValues: "Effacer les valeurs invisibles",
    cookieName:
      "Nom du cookie (pour empêcher de compléter 2 fois le questionnaire localement)",
    sendResultOnPageNext: "Envoyer les résultats au changement de page",
    storeOthersAsComment: 'Sauvegarder la valeur "Autres" dans un champ séparé',
    showPageTitles: "Afficher les titres de pages",
    showPageNumbers: "Afficher les numéros de pages",
    pagePrevText: "Texte bouton page précédente",
    pageNextText: "Texte bouton page suivante",
    completeText: "Texte bouton terminer",
    startSurveyText: "Texte bouton commencer",
    showNavigationButtons:
      "Afficher les boutons de navigation (navigation par défaut)",
    showPrevButton:
      "Afficher le bouton précédent (l'utilisateur pourra retourner sur la page précédente)",
    firstPageIsStarted:
      "La première page du questionnaire est une page de démarrage.",
    showCompletedPage: 'Afficher la page "terminé" à la fin (completedHtml)',
    goNextPageAutomatic:
      "Aller à la page suivante automatiquement pour toutes les questions",
    showProgressBar: "Afficher la barre de progression",
    questionTitleLocation: "Emplacement du titre de la question",
    requiredText: "La question requiert un/des symbole(s)",
    questionStartIndex: "Index de départ de la question (1, 2 ou 'A', 'a')",
    showQuestionNumbers: "Afficher les numéros de questions",
    questionTitleTemplate:
      "Gabarit du titre de question, par défaut : '{no}. {require} {title}'",
    questionErrorLocation: "Emplacement de l'erreur",
    focusFirstQuestionAutomatic:
      "Focus sur la première question au changement de page",
    questionsOrder: "Ordre des éléments sur la page",
    maxTimeToFinish: "Temps maximum pour terminer le questionnaire",
    maxTimeToFinishPage: "Temps maximum pour terminer une page",
    showTimerPanel: "Afficher le panneau chronomètre",
    showTimerPanelMode: "Mode d'affichage du panneau chronomètre",
    renderMode: "Mode de rendu",
    allowAddPanel: "Autoriser l'ajout du panneau",
    allowRemovePanel: "Autoriser la suppression du panneau",
    panelAddText: "Ajouter un panneau texte",
    panelRemoveText: "Supprimer le panneau texte",
    isSinglePage: "Afficher tous les éléments sur une seule page",
    expression: "Expression",
    minValue: "Valeur minimum",
    maxValue: "Valeur maximum",
    minLength: "Longueur minimum",
    allowDigits: "Permettre chiffres",
    minCount: "Nombre minimum",
    maxCount: "Nombre maximum",
    regex: "Expression régulière",

    totalText: "Texte pour le total",
    totalType: "Type de total",
    totalExpression: "Expression de calcul",
    totalDisplayStyle: "Format d'affichage",
    totalCurrency: "Monnaie",
    totalFormat: "Format du total",

    logoPosition: "Position du logo",
    addLogo: "Ajouter un logo...",
    changeLogo: "Changer le logo...",
    logoPositions: {
      none: "Retirer le logo",
      left: "Gauche",
      right: "Droite",
      top: "Au dessus",
      bottom: "En dessous",
    },

    tabs: {
      general: "Général",
      fileOptions: "Options",
      html: "Éditeur HTML",
      columns: "Colonnes",
      rows: "Lignes",
      choices: "Choix",
      visibleIf: "Visible si",
      enableIf: "Actif si",
      requiredIf: "Obligatoire si",
      rateValues: "Barème",
      choicesByUrl: "Choix depuis API web",
      matrixChoices: "Choix par défaut",
      multipleTextItems: "Champs texte multiples",
      validators: "Validateurs",
      navigation: "Navigation",
      question: "Question",
      completedHtml: "HTML de fin",
      completedHtmlOnCondition: "Html de fin (page 'terminé') sur condition",
      loadingHtml: "HTML de chargement",
      timer: "Chronomètre/Quiz",
      calculatedValues: "Valeurs calculées",
      triggers: "Déclencheurs",
      templateTitle: "Titre de gabarit",
      totals: "Totaux",
      logic: "Conditions",
      layout: "Disposition",
      data: "Données",
      validation: "Validateurs",
      cells: "Cellules",
      logo: "Logo dans le titre de l'enquête",
      others: "Autres",
    },
    editProperty: 'Éditer la propriété "{0}"',
    items: "[ Éléments: {0} ]",
    enterNewValue: "Veuillez saisir la valeur.",
    noquestions: "Il n'y a aucune question dans le questionnaire.",
    createtrigger: "Veuillez créer un déclencheur",
    triggerOn: "Quand ",
    triggerMakePagesVisible: "Rendre les pages visibles :",
    triggerMakeQuestionsVisible: "Rendre les questions visibles :",
    triggerCompleteText: "Terminer le questionnaire en cas de succès.",
    triggerNotSet: "Le déclencheur n'est pas défini",
    triggerRunIf: "Exécuter si",
    triggerSetToName: "Changer la valeur de : ",
    triggerFromName: "Copier la valeur de : ",
    triggerRunExpression: "Exécuter cette expression :",
    triggerSetValue: "à : ",
    triggerGotoName: "Aller à la question :",
    triggerIsVariable:
      "Ne placez pas la variable dans le résultat du questionnaire.",
    triggerRunExpressionEmpty: "Veuillez entrer une expression valide",
  },
  //Property values
  pv: {
    true: "vrai",
    false: "faux",
    inherit: "hérité",
    show: "afficher",
    hide: "masquer",
    default: "par défaut",
    initial: "initial",
    random: "aléatoire",
    collapsed: "replié",
    expanded: "déployé",
    none: "aucun",
    asc: "ascendant",
    desc: "descendant",
    indeterminate: "indeterminé",
    decimal: "décimal",
    currency: "monnaie",
    percent: "pourcentage",
    firstExpanded: "déployé en premier",
    off: "désactivé",
    onPanel: "panneau",
    onSurvey: "questionnaire",
    list: "liste",
    progressTop: "Progression en haut",
    progressBottom: "Progression en bas",
    progressTopBottom: "Progression en haut et en bas",
    top: "haut",
    bottom: "bas",
    topBottom: "haut et bas",
    both: "les deux",
    left: "gauche",
    color: "couleur",
    date: "date",
    datetime: "heure",
    "datetime-local": "heure locale",
    email: "email",
    month: "mois",
    number: "nombre",
    password: "mot de passe",
    range: "jauge",
    tel: "tél.",
    text: "texte",
    time: "heure",
    url: "URL",
    week: "semaine",
    hidden: "masqué",
    on: "activé",
    onPage: "page",
    edit: "éditer",
    display: "affichage",
    onComplete: "Quand terminé",
    onHidden: "Quand caché",
    all: "tous",
    page: "page",
    survey: "questionnaire",
  },
  //Operators
  op: {
    empty: "est vide",
    notempty: "n'est pas vide",
    equal: "égal",
    notequal: "n'est pas égal",
    contains: "contient",
    notcontains: "ne contient pas",
    anyof: "n'importe quel de",
    allof: "tous parmi",
    greater: "supérieur",
    less: "inférieur",
    greaterorequal: "supérieur ou égal",
    lessorequal: "inférieur ou égal",
  },
  //Embed window
  ew: {
    angular: "Utiliser la version Angular",
    jquery: "Utiliser la version jQuery",
    knockout: "Utiliser la version Knockout",
    react: "Utiliser la version React",
    vue: "Utiliser la version Vue",
    bootstrap: "Pour le framework Bootstrap",
    standard: "Sans Bootstrap",
    showOnPage: "Afficher le questionnaire dans une page",
    showInWindow: "Afficher le questionnaire dans une fenêtre",
    loadFromServer: "Charger le JSON du questionnaire depuis un serveur",
    titleScript: "Scripts et styles",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript",
  },
  //Preview (Survey)
  ts: {
    selectPage: "Sélectionner une page pour la tester",
    showInvisibleElements: "Afficher les éléments invisibles",
  },
  //Validators
  validators: {
    answercountvalidator: "total de réponses",
    emailvalidator: "e-mail",
    numericvalidator: "numérique",
    regexvalidator: "regex",
    textvalidator: "texte",
  },
  //Triggers
  triggers: {
    completetrigger: "terminer le questionnaire",
    setvaluetrigger: "définir la valeur",
    copyvaluetrigger: "copier la valeur",
    skiptrigger: "sauter à la question",
    runexpressiontrigger: "exécuter expression",
    visibletrigger: "modifier la visibilité",
  },
  //Properties
  p: {
    name: "Nom",
    title: {
      name: "Titre",
      title: 'Laissez vide, si même texte que le "Nom"',
    },
    navigationButtonsVisibility: "Visibilité des boutons de navigation",
    questionsOrder: "Ordre des questions",
    maxTimeToFinish: "Temps maximum pour terminer",
    visible: "Visible",
    visibleIf: "Visible si ",
    questionTitleLocation: "Emplacement titre question",
    description: "Description",
    state: "État",
    isRequired: "Obligatoire ?",
    requiredErrorText: "Message d'erreur text obligatoire",
    startWithNewLine: "Commencer avec une nouvelle ligne",
    innerIndent: "Indentation",
    page: "page",
    width: "largeur",
    commentText: "Description champ commentaire",
    valueName: "Nom de la valeur",
    enableIf: "Activer si",
    defaultValue: "Valeur par défaut",
    correctAnswer: "Bonne réponse",
    readOnly: "Lecture seule",
    validators: "Validateurs",
    titleLocation: "Emplacement du titre",
    showCommentArea: "Champ commentaire ?",
    showOtherItem: "Choix autre ?",
    choices: "Choix",
    choicesOrder: "Ordre des choix",
    choicesByUrl: "Choix par API",
    otherText: "Autre texte",
    otherErrorText: 'Texte d\'erreur champ "Autre"',
    storeOthersAsComment: "Sauvegarder choix autre comme commentaire",
    label: "Intitulé",
    showTitle: "Afficher le titre",
    valueTrue: "Valeur vrai",
    valueFalse: "Valeur faux",
    cols: "Colonnes",
    rows: "Nombre de lignes",
    placeholder: "Placeholder (indice dans le champ)",
    optionsCaption: "Texte par défaut",
    expression: "Expression",
    format: "Format",
    displayStyle: "Style d'affichage",
    currency: "Monnaie",
    useGrouping: "Utiliser les groupes",
    showPreview: "Voir la prévisualisation",
    allowMultiple: "Autoriser multiples",
    imageHeight: "Hauteur de l'image",
    imageWidth: "Largeur de l'image",
    storeDataAsText: "Stocker les données comme du texte",
    maxSize: "Taille maximum",
    html: "HTML",
    columns: "Colonnes",
    cells: "Cellules",
    horizontalScroll: "Scroll horizontal",
    cellType: "Type de cellule",
    columnColCount: "Nombre de colonnes",
    columnMinWidth: "Largeur minimale des colonnes",
    rowCount: "Nombre de lignes",
    minRowCount: "Nombre de lignes minimum",
    maxRowCount: "Nombre de lignes maximum",
    keyName: "Nom de la clé",
    keyDuplicationError: "Erreur de clés multiples",
    confirmDelete: "Confirmation de suppression",
    confirmDeleteText: "Texte de confirmation de suppression",
    addRowText: "Bouton ajouter une ligne",
    removeRowText: "Bouton supprimer une ligne",
    items: "Items",
    itemSize: "Nombre maximum de caractères",
    colCount: "Nombre de colonnes",
    templateTitle: "Titre de gabarit",
    templateDescription: "Description du gabarit",
    allowAddPanel: "Autoriser l'ajout de panneau",
    allowRemovePanel: "Autoriser la suppression de panneau",
    panelCount: "Nombre de panneaux",
    minPanelCount: "Nombre minimum de panneaux",
    maxPanelCount: "Nombre maximum de panneaux",
    panelsState: "État des panneaux",
    panelAddText: "Texte d'ajout des panneaux",
    panelRemoveText: "Texte de suppression des panneaux",
    panelPrevText: "Texte panneau précédent",
    panelNextText: "Texte panneau suivant",
    showQuestionNumbers: "Numérotation des questions",
    showRangeInProgress: "Afficher la progression",
    renderMode: "Mode de rendu",
    templateTitleLocation: "Emplacement du titre de gabarit",
    rateValues: "Barème",
    rateMin: "Valeur minimum",
    rateMax: "Valeur maximum",
    rateStep: "Pas",
    minRateDescription: "Description note minimum",
    maxRateDescription: "Description note maximum",
    inputType: "Type de champ",
    size: "Nombre maximum de caractères",
    focusFirstQuestionAutomatic: "Focus automatique sur la première question",
    completedHtml: "HTML questionnaire finalisé",
    completedBeforeHtml: "HTML avant complétion du questionnaire",
    loadingHtml: "HTML de chargement",
    triggers: "Déclencheurs",
    cookieName: "Nom du cookie",
    sendResultOnPageNext: "Envoyer les résultats au changement de page",
    showNavigationButtons: "Boutons de navigation",
    showPrevButton: "Afficher le bouton précédent",
    showPageTitles: "Titre des pages",
    showCompletedPage: "Voir la page formulaire complété ?",
    showPageNumbers: "Numérotation des pages",
    questionErrorLocation: "Emplacement des erreurs",
    showProgressBar: "Barre de progression",
    mode: "Mode d'affichage",
    goNextPageAutomatic: "Aller à la page suivante automatiquement",
    clearInvisibleValues: "Cacher les valeurs invisibles",
    startSurveyText: "Texte de démarrage du questionnaire",
    pagePrevText: "Bouton page précédente",
    pageNextText: "Bouton page suivante",
    completeText: "Texte questionnaire finalisé",
    requiredText: "Texte pour les champs obligatoires",
    questionStartIndex: "Index de numérotation des questions",
    questionTitleTemplate: "Template d'affichage des questions",
    firstPageIsStarted: "Commence à la première page",
    isSinglePage: "Affiché sur une page",
    maxTimeToFinishPage: "Temps maximum pour finir la page",
    showTimerPanel: "Afficher le panneau chronomètre",
    showTimerPanelMode: "Mode d'affichage du panneau chronomètre",
    indent: "Indentation",
    isAllRowRequired: "Toutes les lignes sont-elle obligatoires ?",
    locale: "Langue",
  },
};

editorLocalization.locales["fr"] = frenchTranslation;
