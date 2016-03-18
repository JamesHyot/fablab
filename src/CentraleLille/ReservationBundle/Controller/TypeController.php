<?php
/**
 * Created by PhpStorm.
 * User: windownet
 * Date: 14/03/2016
 * Time: 09:37
 */

namespace CentraleLille\ReservationBundle\Controller;

use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Response;
use CentraleLille\ReservationBundle\Entity\Type;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Form\Form;

class TypeController extends Controller
{
    public function createAction(Request $request){
        $type = new Type();

        $formBuilder =$this->get('form.factory')->createBuilder('form',$type);

        $formBuilder->add('name','text')
        ->add('description','textarea')
        ->add('Sauvegarder','submit');

        $form = $formBuilder->getForm();

        $form->handleRequest($request);

        if($request->isMethod('POST') && $form->isValid() ){
            $em =$this->getDoctrine()->getManager();
            $types = $em->getRepository('ReservationBundle:Type');
            $test = false;
            foreach ($types as $typ){
                if($type->getName() == $typ->getName()) {
                    $test = true;
                }}
            if ($test == false) {
                $em->persist($type);
                $em->flush();
            }
            return $this->redirectToRoute('centrale_lille_types',array('form' =>$form->createView()));
        }

        return $this->render('ReservationBundle::types.html.twig',array('form'=> $form->createView()));
    }

    public function listAction(){
        $em = $this->getDoctrine()->getManager();
        $types = $em->getRepository('ReservationBundle:Type')->findAll();

        return $this->render('ReservationBundle::listes-types.html.twig',array('types'=>$types));

    }

}