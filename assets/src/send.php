<?php


$to = 'in-color-ru@yandex.ru';
$subject = 'Заявка с сайта in color';
$name=''; $phone='';
if (!empty($_POST["name"])) {
    $name = '<p style = "font-size: 1.2em; color: #333" ><span style = "font-weight: 600" > ФИО:</span > '.$_POST['name'].' </p>';
};
if(!empty($_POST["phone"])) {
    $phone = '<p style="font-size: 1.2em; color: #333"><span style="font-weight: 600">Телефон:</span> ' . $_POST['phone'] . '</p>';
};
$message = '
                <html>
                    <head>
                        <title>' . $subject . '</title>
                    </head>
                    <body style="padding: 20px; border: 1px solid #000">'
                        . $name . $phone .
                    '</body>
                </html>';
$headers = "Content-type: text/html; charset=utf-8 \r\n";
mail($to, $subject, $message, $headers);
?>