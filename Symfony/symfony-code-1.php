<?php
$param = $request->query->get('id');
$query = $entityManager->createQuery("SELECT u FROM App\Entity\User u WHERE u.id = $param");
$result = $query->getResult();
?>