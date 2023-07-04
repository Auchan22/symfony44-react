<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/{reactRouting}", name="app_router_home", defaults={"reactRouting": null})
     */
    public function index($reactRouting): Response
    {
//        dd($reactRouting);
        return $this->render('default/index.html.twig');
    }

    /**
     * @Route("/agentes/{reactRouting}", name="app_router_agentes", defaults={"reactRouting": null})
     */
    public function agentes($reactRouting): Response
    {
        return $this->render('default/index.html.twig');
    }

    /**
     * @Route("/operativos/{reactRouting}", name="app_router_operativos", defaults={"reactRouting": null})
     */
    public function operativos():  Response
    {
        return $this->render('default/index.html.twig');
    }

    /**
     * @Route("/honorarios/{reactRouting}", name="app_router_honorarios", defaults={"reactRouting": null})
     */
    public function honorarios():  Response
    {
        return $this->render('default/index.html.twig');
    }
}
