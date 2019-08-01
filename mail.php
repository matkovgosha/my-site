<meta http-equiv='refresh' content='6; url=http://vk.com'>
<meta charset="UTF-8" />
<?php
if (isset($_POST['name'])) {$name = $_POST['name']; if ($name == '') {unset($name);}}
if (isset($_POST['phone'])) {$phone = $_POST['phone']; if ($phone == '') {unset($phone);}}
if (isset($_POST['email'])) {$email = $_POST['email']; if ($email == '') {unset($email);}}
if (isset($_POST['project'])) {$project = $_POST['project']; if ($project == '') {unset($project);}}
if (isset($_POST['body'])) {$body = $_POST['body']; if ($body == '') {unset($body);}}
 
if (isset($name) && isset($phone) && isset($email) && isset($project) && isset($body)){
 
$address = "matkovgoshka@yandex.ru";
$mes = "Имя: $name \nPhone: $phone \nEmail: $email \Компания: $project \nТекст: $body";
$send = mail ($address,$project,$mes,"Content-type:text/plain; charset = UTF-8\r\nFrom:$email");
if ($send == 'true')
{echo "Сообщение отправлено успешно, через 6 секунд Вы будете направлены на главную страницу";}
else {echo "Ошибка, сообщение не отправлено!";}
 
}
else
{
echo "Вы заполнили не все поля, вернитесь назад и заполните необходимые поля!";
}
?>
