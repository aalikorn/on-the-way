<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="addcar.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
</head>
<body>
    <div class="navig">
        <button id="back">Назад</button>
    </div>
    
    <p id="Hadd">Добавить машину</p>
    <br>
    <div class="parameters">
        <a id="model">Модель</a>
        <input type="text" class="vvod" id="p1">
    </div>
    <div class="parameters">
        <a id="number">Номер</a>
        <input type="text" class="vvod" id="p2">
    </div>
    <div class="parameters"> 
        <a id="colorr">Цвет</a>
        <input type="text" class="vvod" id="p3">
    </div>
    <button id="ADD" onclick="">Добавить</button>
</body>
    <script src="scripts/addcar.js"></script>
</html>