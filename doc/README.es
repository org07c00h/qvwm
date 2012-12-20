Acerca de qvwm
--------------
qvwm es un manejador de ventanas para el sistema X Window muy parecido
a Windows 95/98/NT. Permite utilizar el sistema X Window al usuario de
Windows 95/98/NT sin vacilaciones, e igualmente permite al usuario del 
sistema X Window utilizar Windows 95/98/NT.

El nombre de qvwm proviene de lo siguiente: 'q' significa '9' (la misma
pronunciaci�n en japon�s, y casi id�ntica forma) y 'v', '5' (V es 5 en
n�meros romanos). Adem�s, qvwm es tambi�n "98 Window Manager" ya que 'v'
quiere decir '8' (invertida, la V es parecida al 8 en caracteres kanji).

La �ltima versi�n es la 1.1.12 (Senzoku).


Caracter�sticas
---------------
- Escrito desde cero en C++.
- Soporte en varios idiomas sin parches.
- Los mismos gr�ficos que Windows 95/98/NT a nivel de pixel.
- Permite al usuario cambiar entre ventanas usando el conmutador de tareas.
  (Alt+Tab)
- Permite al usuario crear indicadores de ventanas en la barra de tareas.
- Permite al usuario mover y redimensionar una ventana completa .(arraste
  completo)
- Pantalla virtual. (extensi�n de Windows 95/98/NT)
- Caja de di�logo para salir.
- Animaci�n de la barra de t�tulo al minimizar/maximizar una ventana.
- Permite al usuario crear iconos e im�genes animadas de fondo.


La �ltima versi�n
-----------------
Se puede bajar la �ltima versi�n de qvwm de

    http://www.qvwm.org/

Adem�s, este p�gina tiene espejos en los siguientes sitios:

U.S.A
    http://qvwm.kuntrynet.com/qvwm/
        (Peter Hartman  <hartman@kuntrynet.com>)

Tambi�n se puede bajar qvwm de los siguientes sitios:

Japan
    ftp://ring.asahi-net.or.jp/pub/X/window_managers/qvwm/

Japan
    http://www.bkr-lab.utmc.or.jp/software/index.html#QVWM
        (UTMC Ikebukuro Laboratory)


Avisos de errores y preguntas
-----------------------------
Para informa de errores o hacer preguntas sobre qvwm, por favor, env�e
un e-mail a qvwm-support@qvwm.org. Sin embargo, antes de enviar el mensaje, 
por favor lea BUGS.es, TODO.es, FAQ.es y dem�s. Tambi�n son de utilidad
mensajes anteriores en la lista de correo.

En el caso de que qvwm produzca una violaci�n de segmento, se puede 
conseguir m�s informaci�n sobre el error usando la opci�n de compilaci�n
DEBUG. Incluso en el caso de que no pueda obtener el error, se puede
identificar donde falla qvwm analizando el volcado de memoria con gdb.
El an�lisis del volcado se hace como sigue:

  1. Ejecute 'gdb {qvwm} {core}' en el directorio donde se encuentre
     el c�digo fuente de qvwm. ({qvwm} es la ruta donde el ejecutable
     qvwm, {core}, la ruta del volcado de memoria.)
  2. Ejecute 'backtrace' en la l�nea de comando de gdb.

Por favor, p�ngase en contacto con nosotros si tiene alguna petici�n.


Lista de correo
---------------
Se ofrece una lista de correo para el intercambio de informaci�n sobre
qvwm (qvwm-e ML). Se permite el uso del ingl�s en esta lista. Para poder
participar, env�e un correo con el cuerpo

	subscribe

a

	qvwm-e-ctl@qvwm.org

Tambi�n hay una lista de correo para usuarios japoneses (qvwm ML).
Se permite el uso del japon�s y el ingl�s. Para participar en esta
lista, env�e un correo con el cuerpo

	subscribe
a

	qvwm-ctl@qvwm.org


Copyright
---------
qvwm se distribuye bajo la `GNU general public license.'
En el fichero 'COPYING' se encuentra una copia de dicha licencia.


AVISO
-----
La versi�n oficial de qvwm publicada puede no ser suficientemente estable
en algunos entornos. El autor no se hace responsable de ning�n da�o
producido al usar qvwm.


Reconocimientos
---------------
Se han recibido parches para qvwm de las siguientes personas. El autor
est� profundamente agradecido a ellos.

  Miodrag Vallat        <miodrag@ifrance.com>
  Byung Yang            <byung@wam.umd.edu>
  Jun Obama             <george@yk.rim.or.jp>
  Falk Hueffner         <falk.hueffner@student.uni-tuebingen.de>
  Toshiyuki Amagasa     <amagasa@dbms.cs.gunma-u.ac.jp>
  Hajime Morito         <Hajime.Morito@ccsr.cam.ac.uk>
  Chris Meadors         <cmeadors@acc7.ac.cc.md.us>
  Mofeed Shahin         <shahin@ist.flinders.edu.au>
  Osamu Kurati          <kurati@bigfoot.com>
  Youichiro Koga        <y-koga@w3.mag.keio.ac.jp>
  Kenji Minoura         <minoru@i21x12.fuis.fukui-u.ac.jp>
  Don Crimbchin         <djc2@andrew.cmu.edu>
  Nozomu Kobayashi      <nozomu@ssf.abk.nec.co.jp>
  Shuichi Oono          <jr5pdx@debian.or.jp>
  Tamito Kajiyama       <kajiyama@etl.go.jp>
  Takayuki Kusano       <AE5T-KSN@asahi-net.or.jp>
  Francois Petitjean    <francois.petitjean@bureauveritas.com>
  Kasamatsu Kenichi     <camatsu@geocities.co.jp>
  
Agradecimientos a todos aquellos que han enviado informaci�n �til
a la lista de correo, etc.

---
Kenichi Kourai
kourai@qvwm.org

---
Traducido parcialmente por Yukihiro Nakai <Nakai@Mlab.t.u-tokyo.ac.jp>
Traducida al espa�ol por Benjam�n Albi�ana <foobar@escomposlinux.org>
