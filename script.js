// --- langues et textes ---
const LANG = {
    ru: {
        login: "Вход в спортивный портал университета",
        userTypes: {student:"Студент", teacher:"Преподаватель"},
        email: "Университетская почта",
        emailPH: "имя.фамилия@univ.ru",
        password: "Пароль",
        passwordPH: "Ваш пароль",
        forgot: "Забыли пароль?",
        connect: "Войти",
        dashboardStudent: "Табло",
        dashboardTeacher: "Панель преподавателя",
        currentUser: "Вы вошли как",
        logout: "Выйти",
        section: "Секция",
        prof: "Тренер",
        status: "Статус",
        enrolled: "Записан",
        unsubscribe: "Отписаться",
        noSection: "Вы не записаны ни в одну секцию.",
        unsubscribeConfirm: "Вы уверены, что хотите отписаться?",
        enrolledSuccess: "Вы успешно записаны в секцию",
        unsubscribedSuccess: "Вы успешно отписались.",
        enroll: "Записаться",
        alreadyEnrolled: "Уже записаны",
        signupsClosed: "Запись закрыта",
        selectionStatusOpen: "Период выбора открыт. Выберите секцию.",
        selectionStatusClosed: "Период выбора закрыт.",
        present: "Присутствует",
        absent: "Отсутствует",
        newsTitle: "Актуальности спорт",
        eventUpcoming: "Предстоящие события",
        eventPast: "Прошедшие события"

    },
    fr: {
        login: "Connexion MISIS.FIT",
        userTypes: {student:"Étudiant", teacher:"Professeur"},
        email: "Email universitaire",
        emailPH: "prenom.nom@univ.fr",
        password: "Mot de passe",
        passwordPH: "Votre mot de passe",
        forgot: "Mot de passe oublié ?",
        connect: "Se connecter",
        dashboardStudent: "Tableau de bord étudiant",
        dashboardTeacher: "Tableau de bord professeur",
        currentUser: "Connecté en tant que",
        logout: "Déconnexion",
        section: "Section",
        prof: "Professeur",
        status: "Statut",
        enrolled: "Inscrit",
        unsubscribe: "Se désinscrire",
        noSection: "Vous n'êtes actuellement inscrit à aucune section sportive.",
        unsubscribeConfirm: "Êtes-vous sûr de vouloir vous désinscrire ?",
        enrolledSuccess: "Vous êtes inscrit à la section",
        unsubscribedSuccess: "Vous vous êtes désinscrit avec succès.",
        enroll: "S'inscrire",
        alreadyEnrolled: "Déjà inscrit",
        signupsClosed: "Inscriptions fermées",
        selectionStatusOpen: "La période de sélection est ouverte. Choisissez une section sportive.",
        selectionStatusClosed: "La période de sélection est fermée.",
        present: "Présent",
        absent: "Absent",
        newsTitle: "Actualités sportives",
        eventUpcoming: "Événements à venir",
        eventPast: "Événements passés"

    },
    en: {
        login: "Login to MISIS.FIT",
        userTypes: {student:"Student", teacher:"Teacher"},
        email: "University Email",
        emailPH: "firstname.lastname@univ.com",
        password: "Password",
        passwordPH: "Your password",
        forgot: "Forgot password?",
        connect: "Login",
        dashboardStudent: "Student Dashboard",
        dashboardTeacher: "Teacher Dashboard",
        currentUser: "Logged in as",
        logout: "Logout",
        section: "Section",
        prof: "Teacher",
        status: "Status",
        enrolled: "Enrolled",
        unsubscribe: "Unsubscribe",
        noSection: "You are not enrolled in any sports section.",
        unsubscribeConfirm: "Are you sure you want to unsubscribe?",
        enrolledSuccess: "Successfully enrolled in",
        unsubscribedSuccess: "You have unsubscribed successfully.",
        enroll: "Enroll",
        alreadyEnrolled: "Already enrolled",
        signupsClosed: "Signups closed",
        selectionStatusOpen: "Selection period is open. Choose a sport section.",
        selectionStatusClosed: "Selection period is closed.",
        present: "Present",
        absent: "Absent",
        newsTitle: "Sports News",
        eventUpcoming: "Upcoming Events",
        eventPast: "Past Events"

    }
};

let currentLang = "ru";

// Données de l'application
const appData = {
    currentUser: null,
    userType: 'student',
    sections: [
    {
        id: 1,
        name: {"ru":"Пауэрлифтинг","fr":"Powerlifting","en":"Powerlifting"},
        sport: "powerlifting",
        teacher: "Иванов И.И.",
        schedule: "Вт 10-12, Чт 15-17",
        description: {"ru":"Секции пауэрлифтинга.","fr":"Section Powerlifting.","en":"Powerlifting section."},
        capacity: 20,
        enrolled: 10,
        days: ["tuesday","thursday"],
        enrollmentOpen: true
    },
    {
        id: 2,
        name: {"ru":"Плавание","fr":"Natation","en":"Swimming"},
        sport: "swimming",
        teacher: "Смирнова А.А.",
        schedule: "Ср 9-11, Пт 14-16",
        description: {"ru":"Секции плавания.","fr":"Section natation.","en":"Swimming section."},
        capacity: 18,
        enrolled: 8,
        days: ["wednesday","friday"],
        enrollmentOpen: true
    },
    {
        id: 3,
        name: {"ru":"Шахматы","fr":"Échecs","en":"Chess"},
        sport: "chess",
        teacher: "Петров С.С.",
        schedule: "Пн 17-19",
        description: {"ru":"Секции шахмат.","fr":"Section Échecs.","en":"Chess section."},
        capacity: 16,
        enrolled: 6,
        days: ["monday"],
        enrollmentOpen: true
    },
    {
        id: 4,
        name: {"ru":"Футбол","fr":"Football","en":"Football"},
        sport: "football",
        teacher: "Кузнецов А.В.",
        schedule: "Вт 18-20, Чт 18-20",
        description: {"ru":"Секции футбола.","fr":"Section football.","en":"Football section."},
        capacity: 30,
        enrolled: 22,
        days: ["tuesday","thursday"],
        enrollmentOpen: true
    },
    {
        id: 5,
        name: {"ru":"Самбо","fr":"Sambo","en":"Sambo"},
        sport: "sambo",
        teacher: "Алексеев В.В.",
        schedule: "Ср 18-20",
        description: {"ru":"Секции самбо.","fr":"Section Sambo.","en":"Sambo section."},
        capacity: 15,
        enrolled: 10,
        days: ["wednesday"],
        enrollmentOpen: true
    },
    {
        id: 6,
        name: {"ru":"Дзюдо","fr":"Judo","en":"Judo"},
        sport: "judo",
        teacher: "Львова О.О.",
        schedule: "Пн 14-16",
        description: {"ru":"Секции дзюдо.","fr":"Section Judo.","en":"Judo section."},
        capacity: 14,
        enrolled: 7,
        days: ["monday"],
        enrollmentOpen: true
    },
    {
        id: 7,
        name: {"ru":"Хоккей","fr":"Hockey","en":"Hockey"},
        sport: "hockey",
        teacher: "Громов С.С.",
        schedule: "Сб 12-14",
        description: {"ru":"Секции хоккея.","fr":"Section Hockey.","en":"Hockey section."},
        capacity: 20,
        enrolled: 13,
        days: ["saturday"],
        enrollmentOpen: true
    },
    {
        id: 8,
        name: {"ru":"Легкая атлетика","fr":"Athlétisme","en":"Athletics"},
        sport: "athletics",
        teacher: "Сорокин М.М.",
        schedule: "Пт 10-12",
        description: {"ru":"Секции легкой атлетики.","fr":"Section Athlétisme.","en":"Athletics section."},
        capacity: 25,
        enrolled: 16,
        days: ["friday"],
        enrollmentOpen: true
    },
    {
        id: 9,
        name: {"ru":"Большой теннис","fr":"Tennis","en":"Tennis"},
        sport: "tennis",
        teacher: "Романова Е.Е.",
        schedule: "Вс 10-12",
        description: {"ru":"Секции большого тенниса.","fr":"Section Tennis.","en":"Tennis section."},
        capacity: 12,
        enrolled: 6,
        days: ["sunday"],
        enrollmentOpen: true
    },
    {
        id: 10,
        name: {"ru":"Настольный теннис","fr":"Tennis de table","en":"Table Tennis"},
        sport: "tabletennis",
        teacher: "Егоров С.С.",
        schedule: "Вт 14-16",
        description: {"ru":"Секции настольного тенниса.","fr":"Section Tennis de table.","en":"Table tennis section."},
        capacity: 10,
        enrolled: 4,
        days: ["tuesday"],
        enrollmentOpen: true
    },
    {
        id: 11,
        name: {"ru":"Армрестлинг","fr":"Armlutte","en":"Armwrestling"},
        sport: "armwrestling",
        teacher: "Новиков Д.Д.",
        schedule: "Чт 17-19",
        description: {"ru":"Секции армрестлинга.","fr":"Section Armlutte.","en":"Armwrestling section."},
        capacity: 10,
        enrolled: 4,
        days: ["thursday"],
        enrollmentOpen: true
    },
    {
        id: 12,
        name: {"ru":"Баскетбол","fr":"Basketball","en":"Basketball"},
        sport: "basketball",
        teacher: "Мартин М.М.",
        schedule: "Пн 16-18, Ср 14-16",
        description: {"ru":"Баскетбол для новых игроков.","fr":"Séance pour débutants.","en":"For beginners."},
        capacity: 20,
        enrolled: 15,
        days: ["monday","wednesday"],
        enrollmentOpen: true
    },
    {
        id: 13,
        name: {"ru":"Гольф","fr":"Golf","en":"Golf"},
        sport: "golf",
        teacher: "Куликов П.П.",
        schedule: "Сб 15-17",
        description: {"ru":"Секции гольфа.","fr":"Section Golf.","en":"Golf section."},
        capacity: 8,
        enrolled: 3,
        days: ["saturday"],
        enrollmentOpen: true
    },
    {
        id: 14,
        name: {"ru":"Каратэ","fr":"Karate","en":"Karate"},
        sport: "karate",
        teacher: "Волкова Т.Т.",
        schedule: "Ср 16-18",
        description: {"ru":"Секции каратэ.","fr":"Section Karate.","en":"Karate section."},
        capacity: 12,
        enrolled: 7,
        days: ["wednesday"],
        enrollmentOpen: true
    },
    {
        id: 15,
        name: {"ru":"Бокс","fr":"Boxe","en":"Boxing"},
        sport: "boxing",
        teacher: "Галкин А.А.",
        schedule: "Пт 17-19",
        description: {"ru":"Секции бокса.","fr":"Section Boxe.","en":"Boxing section."},
        capacity: 15,
        enrolled: 9,
        days: ["friday"],
        enrollmentOpen: true
    }
],

    userSections: [],
    selectionPeriodOpen: true
};

// Initialisation
window.onload = function () {
    setLang('ru');
    document.querySelectorAll('.user-type').forEach(type => {
        type.addEventListener('click', function () {
            document.querySelectorAll('.user-type').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            appData.userType = this.getAttribute('data-type');
            updateUIForUserType();
            applyLang();
        });
    });
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', function () {
            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            showPage(this.getAttribute('data-page'));
        });
    });
    document.getElementById('sport-filter').addEventListener('change', filterSections);
    document.getElementById('day-filter').addEventListener('change', filterSections);
    document.querySelector('.login-form .btn').onclick = login;
    loadSections();
    applyLang();
};

function setLang(lang) {
    currentLang = lang;
    applyLang();
    loadSections();
    loadUserData();
}

// Application des textes de langue partout
function applyLang() {
    document.querySelector('.login-form h2').textContent = LANG[currentLang].login;
    document.querySelectorAll('.user-type').forEach((el,i)=>{
        el.textContent = i===0 ? LANG[currentLang].userTypes.student : LANG[currentLang].userTypes.teacher;
    });
    document.querySelector('label[for="email"]').textContent = LANG[currentLang].email;
    document.getElementById('email').placeholder = LANG[currentLang].emailPH;
    document.querySelector('label[for="password"]').textContent = LANG[currentLang].password;
    document.getElementById('password').placeholder = LANG[currentLang].passwordPH;
    document.querySelector('.btn').textContent = LANG[currentLang].connect;
    document.querySelector('.login-form a').textContent = LANG[currentLang].forgot;
    document.getElementById('current-user').textContent =
        LANG[currentLang].currentUser + ": " + (appData.userType === "teacher" ? LANG[currentLang].userTypes.teacher : LANG[currentLang].userTypes.student);
    document.getElementById('user-name').textContent =
        (appData.userType === "teacher" ? LANG[currentLang].userTypes.teacher : LANG[currentLang].userTypes.student);
    document.querySelector('.container h1').textContent = "";
    document.querySelector('.container a').textContent = LANG[currentLang].logout;
    document.getElementById('dashboard-page').querySelector('h2').textContent = appData.userType==='teacher'?LANG[currentLang].dashboardTeacher:LANG[currentLang].dashboardStudent;
}

// Login
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (!email || !password) {
        alert('Пожалуйста, заполните все поля / Veuillez remplir tous les champs');
        return;
    }
    appData.currentUser = email;
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('app').style.display = 'block';
    updateUIForUserType();
    loadUserData();
    applyLang();
}

// Déconnexion
function logout() {
    appData.currentUser = null;
    appData.userSections = [];
    document.getElementById('app').style.display = 'none';
    document.getElementById('login-page').style.display = 'flex';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
}

// Onglets dashboard prof/étudiant
function updateUIForUserType() {
    const isTeacher = appData.userType === 'teacher';

    // Onglets pour prof uniquement
    document.querySelectorAll('.teacher-only').forEach(el => {
        el.style.display = isTeacher ? 'flex' : 'none';
    });

    // Onglets pour étudiant uniquement
    document.querySelectorAll('.student-only').forEach(el => {
        el.style.display = !isTeacher ? 'flex' : 'none';
    });

    // Onglets toujours à activer (hors prof et étudiant)
    document.querySelectorAll('.nav-tab:not(.teacher-only):not(.student-only)').forEach(tab => {
        const page = tab.getAttribute('data-page');
        tab.style.display = 'flex';
        tab.onclick = function() { showPage(page); };
        tab.classList.remove('disabled');
    });

    // Affichage pages prof/étudiant
    document.querySelectorAll('.page').forEach(pg => pg.classList.remove('active'));
    if (isTeacher) {
    showPage('schedule'); // Le prof voit directement "Расписание" à la connexion
    } else {
    showPage('dashboard');
    }
   }
// Affichage d'une seule page selon onglet
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId + '-page').classList.add('active');
    
    // Charger les actualités quand on clique sur l'onglet news
    if (pageId === 'news') {
        loadNewsPage();
    }
}


// Sections sportives dynamique + langue
function loadSections() {
    const container = document.getElementById('sections-container');
    container.innerHTML = '';
    appData.sections.forEach(section => {
        const sectionCard = document.createElement('div');
        sectionCard.className = 'section-card';
        const isEnrolled = appData.userSections.some(s => s.id === section.id);
        const canEnroll = section.enrollmentOpen && appData.selectionPeriodOpen;
        sectionCard.innerHTML = `
    <h3>${section.name[currentLang]}</h3>
    <p><strong>${LANG[currentLang].sport || "Спорт"}:</strong> ${section.name[currentLang]}</p>
    <p><strong>${LANG[currentLang].prof}:</strong> ${section.teacher}</p>
    <p><strong>${LANG[currentLang].schedule || "Расписания"}:</strong> ${section.schedule}</p>
    <p>${section.description[currentLang]}</p>
    <p><strong>Мест:</strong> ${section.enrolled}/${section.capacity}</p>
    <div style="margin-top: 15px;">
        ${isEnrolled ?
            `<span class="status-badge status-enrolled">${LANG[currentLang].alreadyEnrolled}</span>
            <button class="btn" onclick="unsubscribeSection()">${LANG[currentLang].unsubscribe}</button>` :
            (canEnroll ?
                `<button class="btn" onclick="enrollInSection(${section.id})">${LANG[currentLang].enroll}</button>` :
                `<span class="status-badge status-pending">${LANG[currentLang].signupsClosed}</span>`)
        }
    </div>
    `;
        container.appendChild(sectionCard);
    });

    // Statut période de sélection
    const selectionStatus = document.getElementById('selection-status');
    if (appData.selectionPeriodOpen) {
        selectionStatus.textContent = LANG[currentLang].selectionStatusOpen;
        selectionStatus.style.color = 'green';
    } else {
        selectionStatus.textContent = LANG[currentLang].selectionStatusClosed;
        selectionStatus.style.color = 'red';
    }
}

// Filtrer les sections
function filterSections() {
    const sportFilter = document.getElementById('sport-filter').value;
    const dayFilter = document.getElementById('day-filter').value;
    const sections = document.querySelectorAll('.section-card');
    sections.forEach(card => {
        const sport = card.querySelector('p:nth-child(2)').textContent.toLowerCase();
        const days = card.querySelector('p:nth-child(4)').textContent.toLowerCase();
        const sportMatch = !sportFilter || sport.includes(sportFilter);
        const dayMatch = !dayFilter || days.includes(dayFilter);
        card.style.display = (sportMatch && dayMatch) ? 'block' : 'none';
    });
}

// S'inscrire à une section
function enrollInSection(sectionId) {
    if (!appData.selectionPeriodOpen) {
        alert(LANG[currentLang].signupsClosed);
        return;
    }
    const section = appData.sections.find(s => s.id === sectionId);
    if (!section) {
        alert("Section не найдена / non trouvée.");
        return;
    }
    if (section.enrolled >= section.capacity) {
        alert("Мест нет / Section complète.");
        return;
    }
    if (appData.userSections.length > 0) {
        alert(LANG[currentLang].alreadyEnrolled + ". " + LANG[currentLang].unsubscribe + " ?");
        return;
    }
    appData.userSections.push(section);
    section.enrolled++;
    alert(`${LANG[currentLang].enrolledSuccess} ${section.name[currentLang]}.`);
    loadUserData();
    loadSections();
}

// Désinscription pour l'étudiant
function unsubscribeSection() {
    if (!confirm(LANG[currentLang].unsubscribeConfirm)) return;
    if (appData.userSections.length > 0) {
        const section = appData.userSections.shift();
        // update participant count
        const s = appData.sections.find(sec => sec.id === section.id);
        if (s) s.enrolled--;
        alert(LANG[currentLang].unsubscribedSuccess);
        loadUserData();
        loadSections();
    }
}

// Mise à jour de l'interface étudiant/prof
function loadUserData() {
    if (appData.userType === 'student') loadStudentData();
    else loadTeacherData();
}
    function loadStudentData() {
    const hasSection = appData.userSections.length > 0;
    document.getElementById('no-section-message').style.display = hasSection ? 'none' : 'block';
    document.getElementById('current-section-info').style.display = hasSection ? 'block' : 'none';
    if (hasSection) {
        const currentSection = appData.userSections[0];
        document.getElementById('section-name').textContent = currentSection.name[currentLang];
        document.getElementById('teacher-name').textContent = currentSection.teacher;

    }
    // Emploi du temps étudiant illustratif
    const schedule = [
        { day: "Понедельник", time: "16:00-18:00", sport: "Баскетбол", salle: "Зал A" },
        { day: "Вторник", time: "14:00-16:00", sport: "Настольный теннис", salle: "Зал B" },
        { day: "Среда", time: "09:00-11:00", sport: "Плавание", salle: "Бассейн" },
        { day: "Четверг", time: "15:00-17:00", sport: "Пауэрлифтинг", salle: "Зал С" },
        { day: "Пятница", time: "10:00-12:00", sport: "Легкая атлетика", salle: "Стадион" }
    ];
    let html = '<table style="width:100%;border-collapse:collapse"><thead><tr><th>День</th><th>Время</th><th>Секция</th><th>Место</th></tr></thead><tbody>';
    schedule.forEach(row => {
        html += `<tr>
            <td>${row.day}</td>
            <td>${row.time}</td>
            <td>${row.sport}</td>
            <td>${row.salle}</td>
        </tr>`;
    });
    html += '</tbody></table>';
    document.getElementById('student-schedule').innerHTML = html;
    document.getElementById('student-schedule').style.display = 'block';
    document.getElementById('teacher-schedule').style.display = 'none';

    updateNextSessions();
    updateAttendanceHistory();

// --- Démo de progrès étudiant ---
    const progressStats = [
        { label: "Секции посещены", value: 7 },
        { label: "Занятий подряд без пропусков", value: 5 },
        { label: "Лучший результат (легкая атлетика)", value: "12.2 сек на 100м" },
        { label: "Подъём штанги", value: "85 кг" }
    ];
    let progressHtml = '<ul style="padding-left:20px;">';
    progressStats.forEach(p => {
        progressHtml += `<li><strong>${p.label}:</strong> ${p.value}</li>`;
    });
    progressHtml += '</ul>';
    document.getElementById('progress-stats').innerHTML = progressHtml;

    updateNextSessions();
    updateAttendanceHistory();

  }
function loadTeacherData() {
    loadTeacherGroups();
    // Emploi du temps professeur illustratif
    const profScheduleData = [
        { day: "Понедельник", time: "16:00-18:00", group: "Баскетбол Группа A", salle: "Зал A" },
        { day: "Вторник", time: "18:00-20:00", group: "Футбол Соревнование", salle: "Стадион" },
        { day: "Четверг", time: "10:00-12:00", group: "Powerlifting", salle: "Зал С" }
    ];
    let html = '<table style="width:100%;border-collapse:collapse"><thead><tr><th>День</th><th>Время</th><th>Группа</th><th>Место</th></tr></thead><tbody>';
    profScheduleData.forEach(row => {
        html += `<tr>
            <td>${row.day}</td>
            <td>${row.time}</td>
            <td>${row.group}</td>
            <td>${row.salle}</td>
        </tr>`;
    });
    html += '</tbody></table>';
    document.getElementById('teacher-schedule').innerHTML = html;
    document.getElementById('teacher-schedule').style.display = 'block';
    document.getElementById('student-schedule').innerHTML = '';
    document.getElementById('student-schedule').style.display = 'none';   
}
function loadTeacherGroups() {
    const container = document.getElementById('teacher-groups');
    const groups = [
        { name: 'Баскетбол Начинающие Группа A', students: 15 },
        { name: 'Футбол Соревнование', students: 22 },
        { name: 'Плавание Группа 1', students: 12 },
        { name: 'пауэрлифтинг', students: 9 }
    ];
    let html = '';
    groups.forEach(group => {
        html += `
            <div class="section-card">
                <h3>${group.name}</h3>
                <p>${group.students} студент(ов)</p>
                <button class="btn" style="margin-top: 10px;">Управлять группой</button>
            </div>
        `;
    });
    container.innerHTML = html;
}

function loadTeacherData() {
    loadTeacherGroups();
    loadTeacherReports();
    // ... reste du code éventuel

function loadTeacherReports() {
    const container = document.querySelector('#reports-page .card');
    const reports = [
        { date: "2025-10-01", group: "Баскетбол Начинающие", absents: 2, notes: "Без происшествий" },
        { date: "2025-10-07", group: "Футбол Соревнование", absents: 0, notes: "Все присутствовали" },
        { date: "2025-10-12", group: "Плавание", absents: 1, notes: "Отличное занятие" }
    ];
    let html = `
        <h3>Последние отчёты по группам</h3>
        <table style="width:100%;border-collapse:collapse">
            <thead>
                <tr>
                    <th>Дата</th>
                    <th>Группа</th>
                    <th>Отсутствующих</th>
                    <th>Комментарий</th>
                </tr>
            </thead>
            <tbody>`;
    reports.forEach(report => {
        html += `<tr>
            <td>${report.date}</td>
            <td>${report.group}</td>
            <td>${report.absents}</td>
            <td>${report.notes}</td>
        </tr>`;
    });
    html += `</tbody></table>`;
    container.innerHTML = html;
}
}


function updateNextSessions() {
    const container = document.getElementById('next-sessions');
    if (appData.userSections.length === 0) {
        container.innerHTML = `<p>${LANG[currentLang].noSection}</p>`;
        return;
    }
    const currentSection = appData.userSections[0];
    const sessions = [
        { date: '2024-09-16', time: '16:00-18:00', location: 'Зал A' }
    ];
    let html = '';
    sessions.forEach(session => {
        html += `
            <div style="padding: 10px; border-bottom: 1px solid #eee;">
                <strong>${session.date}</strong> - ${session.time}<br>
                <em>${session.location}</em>
            </div>
        `;
    });
    container.innerHTML = html;
}

function updateAttendanceHistory() {
    const container = document.getElementById('attendance-history');
    // Historique varié avec présence, absence, notes
    const attendanceData = [
        { date: '2025-09-10', section: LANG[currentLang].section + " Баскетбол", present: true, notes: 'OK' },
        { date: '2025-09-17', section: LANG[currentLang].section + " Плавание", present: false, notes: 'Болел' },
        { date: '2025-09-24', section: LANG[currentLang].section + " Пауэрлифтинг", present: true, notes: 'Лучший результат 85 кг' },
        { date: '2025-10-01', section: LANG[currentLang].section + " Лёгкая атлетика", present: true, notes: 'Новая дистанция 100м' },
        { date: '2025-10-08', section: LANG[currentLang].section + " Баскетбол", present: false, notes: 'Не было по уваж. причине' }
    ];
    let html = '';
    attendanceData.forEach(record => {
        html += `
            <tr>
                <td>${record.date}</td>
                <td>${record.section}</td>
                <td class="${record.present ? 'attendance-present' : 'attendance-absent'}">
                    ${record.present ? LANG[currentLang].present : LANG[currentLang].absent}
                </td>
                <td>${record.notes}</td>
            </tr>
        `;
    });
    container.innerHTML = html;
}  

// Textes multilingues pour la page de reset
const RESET_TEXTS = {
    ru: {
        title: "Забыли пароль?",
        labelEmail: "Ваш университетский e-mail",
        emailPlaceholder: "имя.фамилия@univ.ru",
        sendBtn: "Отправить код",
        labelCode: "Полученный код:",
        labelNewPass: "Новый пароль:",
        confirmBtn: "Сохранить",
        back: "Вернуться к входу",
        msgSent: "Код отправлен на ваш e-mail.",
        msgSuccess: "Пароль успешно изменён! Теперь войдите с новым.",
        errorEmail: "Введите корректный e-mail.",
        errorCode: "Неверный код.",
        errorPw: "Пароль слишком короткий."
    },
    fr: {
        title: "Mot de passe oublié",
        labelEmail: "Votre e-mail universitaire",
        emailPlaceholder: "prenom.nom@univ.fr",
        sendBtn: "Envoyer le code",
        labelCode: "Code reçu :",
        labelNewPass: "Nouveau mot de passe :",
        confirmBtn: "Valider",
        back: "Retour à la connexion",
        msgSent: "Un code a été envoyé à votre adresse e-mail.",
        msgSuccess: "Mot de passe modifié ! Connectez-vous avec le nouveau mot de passe.",
        errorEmail: "Veuillez indiquer une adresse email valide.",
        errorCode: "Code incorrect !",
        errorPw: "Mot de passe trop court."
    },
    en: {
        title: "Forgot your password?",
        labelEmail: "Your university email",
        emailPlaceholder: "firstname.lastname@univ.com",
        sendBtn: "Send code",
        labelCode: "Code received:",
        labelNewPass: "New password:",
        confirmBtn: "Confirm",
        back: "Back to login",
        msgSent: "A code was sent to your email.",
        msgSuccess: "Password changed successfully! Please log in with your new password.",
        errorEmail: "Please enter a valid email.",
        errorCode: "Incorrect code.",
        errorPw: "Password too short."
    }
};

function applyResetLang() {
    const t = RESET_TEXTS[currentLang];
    document.getElementById('reset-title').textContent = t.title;
    document.getElementById('reset-label-email').textContent = t.labelEmail;
    document.getElementById('reset-email').placeholder = t.emailPlaceholder;
    document.getElementById('send-reset-code').textContent = t.sendBtn;
    document.getElementById('reset-label-code').textContent = t.labelCode;
    document.getElementById('reset-label-newpass').textContent = t.labelNewPass;
    document.getElementById('confirm-reset').textContent = t.confirmBtn;
    document.getElementById('reset-back-btn').textContent = t.back;
    document.getElementById('reset-message').textContent = '';
    document.getElementById('reset-step2').style.display = 'none';
}

// Active la page reset password, désactive connexion
document.querySelector('.login-form a').onclick = function(e) {
    e.preventDefault();
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('reset-password-page').style.display = 'flex';
    applyResetLang();
};

// Retour à la connexion depuis la page reset
document.getElementById('reset-back-btn').onclick = function() {
    document.getElementById('reset-password-page').style.display = 'none';
    document.getElementById('login-page').style.display = 'flex';
};

const oldSetLang = setLang;
setLang = function(lang) {
    currentLang = lang;
    oldSetLang(lang);
    if (document.getElementById('reset-password-page').style.display === 'flex')
        applyResetLang();
};

let resetTempCode = "123456"; // MOCK : à remplacer par code envoyé par le serveur
document.getElementById('send-reset-code').onclick = function() {
    const email = document.getElementById('reset-email').value.trim();
    const t = RESET_TEXTS[currentLang];
    if (!email || !email.includes("@")) {
        alert(t.errorEmail);
        return;
    }
    // Ici, appelle serveur /api/send-code
    document.getElementById('reset-message').style.color = 'green';
    document.getElementById('reset-message').textContent = t.msgSent;
    document.getElementById('reset-step2').style.display = 'block';
};

document.getElementById('confirm-reset').onclick = function() {
    const code = document.getElementById('reset-code').value.trim();
    const newPw = document.getElementById('new-password').value;
    const t = RESET_TEXTS[currentLang];
    if (code !== resetTempCode) {
        alert(t.errorCode);
        return;
    }
    if (!newPw || newPw.length < 5) {
        alert(t.errorPw);
        return;
    }
    // Ici, appelle backend pour changer le mot de passe
    document.getElementById('reset-message').style.color = 'green';
    document.getElementById('reset-message').textContent = t.msgSuccess;
    setTimeout(() => {
        document.getElementById('reset-password-page').style.display = 'none';
        document.getElementById('login-page').style.display = 'flex';
    }, 1800);
}


function loadNewsPage() {
    const newsContainer = document.getElementById('news-feed');
    if (!newsContainer) return;

    newsContainer.innerHTML = '';

    // All news events
    const allEvents = [
        // UPCOMING EVENTS (GREEN)
        {
            title: { ru: '🏀 Финал Чемпионата по Баскетболу', fr: '🏀 Finale du Championnat de Basketball', en: '🏀 Basketball Championship Final' },
            date: '15 ноября',
            time: '18:00',
            location: { ru: 'Спортзал №1', fr: 'Gymnase №1', en: 'Gym №1' },
            status: 'upcoming'
        },
        {
            title: { ru: '🏊 Турнир по Плаванию', fr: '🏊 Tournoi de Natation', en: '🏊 Swimming Tournament' },
            date: '16 ноября',
            time: '10:00',
            location: { ru: 'Бассейн МИСИС', fr: 'Piscine MISIS', en: 'MISIS Pool' },
            status: 'upcoming'
        },
        {
            title: { ru: '⚽ Матч по Футболу (Муж)', fr: '⚽ Match de Football (H)', en: '⚽ Football Match (Men)' },
            date: '17 ноября',
            time: '19:30',
            location: { ru: 'Стадион МИСИС', fr: 'Stade MISIS', en: 'MISIS Stadium' },
            status: 'upcoming'
        },
        {
            title: { ru: '🎾 Чемпионат по Теннису', fr: '🎾 Championnat de Tennis', en: '🎾 Tennis Championship' },
            date: '18 ноября',
            time: '14:00',
            location: { ru: 'Теннисные корты', fr: 'Courts de Tennis', en: 'Tennis Courts' },
            status: 'upcoming'
        },
        {
            title: { ru: '🏐 Волейбол: МИСИС vs МГУ', fr: '🏐 Volleyball: MISIS vs MGU', en: '🏐 Volleyball: MISIS vs MGU' },
            date: '19 ноября',
            time: '17:00',
            location: { ru: 'Спортзал №2', fr: 'Gymnase №2', en: 'Gym №2' },
            status: 'upcoming'
        },

        // PAST EVENTS (GRAY)
        {
            title: { ru: '⚽ Результат: Футбол (Жен) 3:1', fr: '⚽ Résultat: Football (F) 3:1', en: '⚽ Result: Football (Women) 3:1' },
            date: '10 ноября',
            time: '18:00',
            location: { ru: 'Стадион МИСИС', fr: 'Stade MISIS', en: 'MISIS Stadium' },
            status: 'past'
        },
        {
            title: { ru: '🏃 Кросс-кантри забег завершён', fr: '🏃 Course de Cross-country terminée', en: '🏃 Cross-country Run Completed' },
            date: '8 ноября',
            time: '09:00',
            location: { ru: 'Парк МИСИС', fr: 'Parc MISIS', en: 'MISIS Park' },
            status: 'past'
        },
        {
            title: { ru: '🥊 Бокс: внутренний турнир 🥊', fr: '🥊 Boxe: tournoi interne', en: '🥊 Boxing: Internal Tournament' },
            date: '5 ноября',
            time: '16:00',
            location: { ru: 'Тренировочный зал', fr: 'Salle d\'entraînement', en: 'Training Hall' },
            status: 'past'
        },
        {
            title: { ru: '🤸 Гимнастика: Демонстрация 2:0', fr: '🤸 Gymnastique: Démonstration 2:0', en: '🤸 Gymnastics: Showcase 2:0' },
            date: '3 ноября',
            time: '15:00',
            location: { ru: 'Большой спортзал', fr: 'Grand Gymnase', en: 'Main Gym' },
            status: 'past'
        }
    ];

    // UPCOMING SECTION
    const upcomingEvents = allEvents.filter(e => e.status === 'upcoming');
    if (upcomingEvents.length > 0) {
        const upcomingHTML = `
            <div class="news-section">
                <h3 style="color: #27ae60; margin-bottom: 15px;">
                    <span style="font-size: 20px;">📅</span> 
                    ${LANG[currentLang].eventUpcoming}
                </h3>
                ${upcomingEvents.map(event => `
                    <div class="news-item news-upcoming" style="border-left: 5px solid #27ae60; padding: 15px; margin-bottom: 15px; background: #f0f8f4; border-radius: 4px;">
                        <div style="display: flex; justify-content: space-between; align-items: start;">
                            <div>
                                <h4 style="margin: 0 0 8px 0; color: #2c3e50;">${event.title[currentLang]}</h4>
                                <p style="margin: 5px 0; color: #7f8c8d; font-size: 14px;">
                                    📍 ${event.location[currentLang]} | ⏰ ${event.time}
                                </p>
                                <p style="margin: 5px 0; color: #95a5a6; font-size: 13px;">📅 ${event.date}</p>
                            </div>
                            <span style="background: #27ae60; color: white; padding: 6px 12px; border-radius: 4px; font-size: 12px; white-space: nowrap;">
                               ${currentLang === 'ru' ? 'Предстоящие' : (currentLang === 'fr' ? 'À venir' : 'Upcoming')}
                             </span>

                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        newsContainer.innerHTML += upcomingHTML;
    }

    // PAST SECTION
    const pastEvents = allEvents.filter(e => e.status === 'past');
    if (pastEvents.length > 0) {
        const pastHTML = `
            <div class="news-section" style="margin-top: 30px;">
                <h3 style="color: #95a5a6; margin-bottom: 15px;">
                    <span style="font-size: 20px;">📜</span> 
                    ${LANG[currentLang].eventPast}
                </h3>
                ${pastEvents.map(event => `
                    <div class="news-item news-past" style="border-left: 5px solid #bdc3c7; padding: 15px; margin-bottom: 15px; background: #f5f5f5; border-radius: 4px; opacity: 0.9;">
                        <div style="display: flex; justify-content: space-between; align-items: start;">
                            <div>
                                <h4 style="margin: 0 0 8px 0; color: #7f8c8d;">${event.title[currentLang]}</h4>
                                <p style="margin: 5px 0; color: #95a5a6; font-size: 14px;">
                                    📍 ${event.location[currentLang]} | ⏰ ${event.time}
                                </p>
                                <p style="margin: 5px 0; color: #bdc3c7; font-size: 13px;">📅 ${event.date}</p>
                            </div>
                            <span style="background: #95a5a6; color: white; padding: 6px 12px; border-radius: 4px; font-size: 12px; white-space: nowrap;">
                                ${currentLang === 'ru' ? 'Прошедшие' : (currentLang === 'fr' ? 'Passé' : 'Past')}
                             </span>

                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        newsContainer.innerHTML += pastHTML;
    }
}
