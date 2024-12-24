document.addEventListener('DOMContentLoaded', function () {
  // Словарь
 document.getElementById('dictionaryList').addEventListener('click', function(event) {
     if (event.target.tagName === 'LI') {
         const selectedWord = event.target.textContent;
         document.querySelectorAll('#dictionaryList li').forEach(li => li.classList.remove('selected'));
         event.target.classList.add('selected');
         const definitions = {
          "Финт Зидана": "Эффектный финт, при котором игрок разворачивается на 360 градусов, используя подошву стопы, чтобы защитить мяч от соперника.",
      "Бисиклета": "Удар по мячу в падении, когда игрок бьет по мячу ногой, находясь в воздухе спиной к воротам.",
       "Прокид": "Пас на ход, когда мяч отправляется в свободную зону, куда бежит партнер по команде.",
       "Ложный замах": "Имитация удара для обмана защитника.",
      "Чип-удар": "Удар по мячу 'парашютом', который перекидывает вратаря, если тот вышел далеко из ворот.",
       "Тики-Така": "Стиль игры, основанный на коротких и быстрых передачах, постоянном движении и владении мячом.",
        "Прессинг": "Активные действия игроков, направленные на отбор мяча у соперника на его половине поля.",
       "Свободный удар": "Возможность пробить по воротам после нарушения правил со стороны соперника.",
        "Офсайд": "Правило, запрещающее игроку атакующей команды находиться ближе к воротам соперника, чем последний защитник, в момент передачи ему мяча.",
      "Хэдшот": "Забивание гола головой."
      };
         document.getElementById('definition').textContent = definitions[selectedWord] || "Описание не найдено.";
     }
 });

 // Галерея
 const slider = document.querySelector('.slider');
 const slides = document.querySelectorAll('.slide');
 const prevButton = document.getElementById('prevSlide');
 const nextButton = document.getElementById('nextSlide');
 const slideNumber = document.getElementById('slideNumber');

 let currentSlide = 0;
 const totalSlides = slides.length;

 function updateSlider() {
      slider.style.transform = `translateX(-${currentSlide * 100}%)`;
       slideNumber.textContent = `${currentSlide + 1} из ${totalSlides}`;
 }

 prevButton.addEventListener('click', function() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
     updateSlider();
 });

 nextButton.addEventListener('click', function() {
     currentSlide = (currentSlide + 1) % totalSlides;
       updateSlider();
 });
   updateSlider();


 // Тест
 const quizForm = document.getElementById('quizForm');
 const resultDiv = document.getElementById('result');
 const scoreDisplay = document.getElementById('score');
  const correctAnswersDiv = document.getElementById('correctAnswers');
  const resetButton = document.getElementById('resetButton');

 quizForm.addEventListener('submit', function(event) {
       event.preventDefault();
       let score = 0;
     const correctAnswers = {
         question1: "option2",
         question2: "option3",
         question3: "option2",
          question4: "option2",
          question5: "option1",
     };
        const userAnswers = {
         question1: quizForm.question1.value,
         question2: quizForm.question2.value,
         question3: quizForm.question3.value,
          question4: quizForm.question4.value,
          question5: quizForm.question5.value,
     };

      correctAnswersDiv.innerHTML = '';

      for (const question in correctAnswers) {
        if (userAnswers[question] === correctAnswers[question]) {
          score++;
              const correctP = document.createElement('p');
               correctP.textContent = `Вопрос: ${question.slice(-1)} - Правильно`;
                correctP.classList.add('correct');
              correctAnswersDiv.appendChild(correctP);
              } else {
             const incorrectP = document.createElement('p');
              incorrectP.textContent = `Вопрос: ${question.slice(-1)} - Неправильно`;
               incorrectP.classList.add('incorrect');
              correctAnswersDiv.appendChild(incorrectP);
              }
     }
    
     scoreDisplay.textContent = `Набрано баллов: ${score} из ${Object.keys(correctAnswers).length}`;

    resultDiv.style.display = 'block';

      localStorage.setItem('userScore', score); // Сохраняем результат
       updateProfile();
 });

  resetButton.addEventListener('click', function() {
     quizForm.reset();
     resultDiv.style.display = 'none';
 });


     // Личный кабинет
   function updateProfile() {
         const profileLogin = document.getElementById('profile-login');
          const profileDate = document.getElementById('profile-date');
         const profileGender = document.getElementById('profile-gender');
          const profileScore = document.getElementById('profile-score');

         const userLogin = localStorage.getItem('userLogin');
         const userDateOfBirth = localStorage.getItem('userDateOfBirth');
         const userGender = localStorage.getItem('userGender');
          const userScore = localStorage.getItem('userScore');

          profileLogin.textContent = userLogin || 'Не указано';
         profileDate.textContent = userDateOfBirth || 'Не указано';
         profileGender.textContent = userGender || 'Не указано';
         profileScore.textContent = userScore || '0';
      }

      updateProfile();

    // Выход
       document.getElementById('logoutButton').addEventListener('click', function() {
         localStorage.removeItem('userLogin');
          localStorage.removeItem('userDateOfBirth');
         localStorage.removeItem('userGender');
        window.location.href = 'index.html'; 
     });

 
   const footer = document.querySelector('footer');

       function checkScroll() {
         if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
         footer.classList.add('visible');
         } else {
            footer.classList.remove('visible');
         }
      }

     window.addEventListener('scroll', checkScroll);
     checkScroll(); 
});