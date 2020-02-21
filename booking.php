<?php
require 'PHPMailer/PHPMailerAutoload.php';
$jsonBook=file_get_contents('php://input');
$bookData=json_decode($jsonBook,true);

$mail = new PHPMailer;

$mail->CharSet = 'UTF-8';

// Настройки SMTP
$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPDebug = 0;
$mail->Host = 'smtp.mail.ru';
$mail->Port = 465;
$mail->SMTPSecure = 'ssl';
$mail->Username = 'bahir24@mail.ru';
$mail->Password = 'q69Z9TrzS4TQ';

// От кого
$mail->setFrom('bahir24@mail.ru');        

// Кому
$mail->addAddress('7074033@gmail.com');

$mail->isHTML(true);
//Тема письма (добавить "Заявка №счетчик")
$mail->Subject = "New order";

$tmp = "Спектакль: " . $bookData['perfomance'];
$tmp .= "<br>";
$tmp .= "Дополнительные услуги: " . $bookData['additional'];
$tmp .= "<br>";
$tmp .= "На: " . $bookData['day'];
$tmp .= "<br>";
$tmp .= "" . $bookData['month'];
$tmp .= "<br>";
$tmp .= "Введенный промокод: " . $bookData['promocode'];
$tmp .= "<br>";
$tmp .= "Телефон клиента: " . $bookData['phone'];
$tmp .= "<br>";
$tmp .= "Электронная почта для связи " . $bookData['mail'];
$tmp .= "<br>";
$tmp .= "Цена: " . $bookData['price'];
$tmp .= "<br>";

$mail->Body    = $tmp;

$mail->send();
//Проверка отправки в консоли
echo 'Message has been sent';
?>
