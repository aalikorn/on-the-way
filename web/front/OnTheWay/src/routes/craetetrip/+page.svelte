<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
</head>
<body>
    <link rel="stylesheet" href="createtrip.css">
    <h1 id="title">Создание поездки</h1>
    <div class="grey-rect">
        <button class="dir-button">
            <img src="images/location-pin-alt-svgrepo-com.svg" id="dir-image">
            <p id="dir-text">Откуда</p>
        </button>
        <script src="createtrip.js"></script>
        <button class="dir-button">
            <img src="images/location-xmark-svgrepo-com.svg" id="dir-image">
            <p id="dir-text">Куда</p>
        </button>
    </div>
    <div class="grey-rect">
        <div class="date-desc">
            <img src="images/date-range-svgrepo-com.svg" id="date-image">
            <p id="date-title">Дата поездки</p>
        </div>
        <div class="date-desc">
            <input type="date" id="date" value="2024-06-23"></input>
        </div>
        
    </div>
    <div class="grey-rect" id="type-id">
        <div class="type-title-choice">
            <p id="type-trip">
                Вид поездки
            </p>
            <ul class="choice">
                <li>
                    <label for="own">На своей машине</label>
                    <input type="checkbox" id="own">
                </li>
                <li>
                    <label for="carsh">Каршеринг</label>
                    <input type="checkbox" id="carsh">
                </li>
                <li>
                    <label for="taxi">Совместное такси</label>
                    <input type="checkbox" id="taxi">
                </li>
            </ul>
        </div>
        <button id="price">
            <img src="images/ruble-svgrepo-com.svg" id="price-image">
            <p id="price-text">Цена</p>
        </button>
    </div>
    <button class="grey-rect">
        <div class="frame">
            <img src="images/travel-car-svgrepo-com.svg" alt="машинка" id="car">
        </div>
        <p class="choose-car">Выбрать машину...</p>
    </button>
    <div class="long-grey-rect">
        <div class="header">
            <p id="param-text">Параметры</p>
            <hr id="hr">
        </div>
        <ul class="param">
            <li class="param-li">
                <label for="own">Есть место для багажа</label>
                <input type="checkbox" id="own">
                
            </li>
            <li class="param-li">
                <label for="carsh">Можно с животными</label>
                <input type="checkbox" id="carsh">
                
            </li>
            <li class="param-li">
                <label for="taxi">Есть детское кресло</label>
                <input type="checkbox" id="taxi">
                
            </li>
            <li class="param-li">
                <label for="taxi">Есть бустер</label>
                <input type="checkbox" id="taxi">
                
            </li>
            <li class="param-li">
                <label for="taxi">Свободных мест</label>
                <input type="checkbox" id="taxi">
                
            </li>
        </ul>
    </div>
    <div class="grey-rect">
        <form id="form">
            <textarea id="comment" placeholder="Дополнительные сведения о поездке..."></textarea>
        </form>
    </div>
    <script src="script.js"></script>
    <button class="create">
        Создать поездку
    </button>
    <footer class="footer">
        <button id="My-profile" onclick="">
            <img class="foot-img" src="images/profile-1341-svgrepo-com.svg">
            <p class="foot-text">Мой профиль</p>
        </button>
        <button class="history" onclick="">
            <img class="foot-img" src="images/travel-car-svgrepo-com.svg">
            <p class="foot-text">История поездок</p>
        </button>
    </footer>
</body>
</html>
