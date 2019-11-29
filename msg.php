<?php
require 'PHPMailer/PHPMailerAutoload.php';
$json=file_get_contents('php://input');
$data=json_decode($json,true);

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
$mail->Subject = "test3";

$tmp = "Email: " . $data['email'];
$tmp .= "<br>";
$tmp .= "Имя: " . $data['name'];
$tmp .= "<br>";
$tmp .= "Телефон: " . $data['tel'];
$tmp .= "<br>";
$tmp .= "Услуга: " . $data['service'];
$mail->Body    = $tmp;

$mail->send();
//Проверка отправки в консоли
echo 'Message has been sent';
?>
