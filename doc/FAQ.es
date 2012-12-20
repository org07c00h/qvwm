
FAQ
===

Conceptos
---------
P. �Qu� es qvwm?
R. Qvwm es un manejador de ventanas similar a Windows 95/98/NT para el
   sistema X Window. El interfaz es casi el mismo que el de Windows
   95/98/NT. Originalmente, "Qvwm" deriv� de "95 Window Manager" (en 
   japon�s, 'q' se pronuncia igual que '9', y tiene casi la misma 
   forma, y 'v' es '5' en n�meros romanos). Adem�s, qvwm es "98
   Window Manager" ya que 'v' viene de '8' (la V invertida es parecida
   al n�mero 8 en caracteres kanji).

P. �Por qu� los pixmaps que vienen con el programa se mueven horizontalmente?
R. Qvwm proporciona una GUI parecida a Windows 95/98/NT. A primera vista
   puede que no se distinga el SO que corre en la m�quina. Para evitar
   esta confusi�n, los pixmaps se mueven horizontalmente. La segunda raz�n
   es que nos rebelamos silenciosamente contra Microsoft.

P. �A d�nde va qvwm?
R. Se est� reescribiendo qvwm con la biblioteca libqv (una biblioteca de
   clases para Windows como la aplicaci�n que se est� desarrollando). Una 
   nueva versi�n de qvwm permitir� personalizarlo con una GUI como Windows
   y modificar completamente el di�logo de salida con el teclado.

   M�s detalles de libqv en http://libqv.qvwm.org/index-en.html


Instalaci�n
-----------
P. El script de configuraci�n se para con "test: argument expected" en 
   Solaris 2.x.
R. Cambiar la l�nea del script de configuraci�n de:

    if test $ac_cv_func_vfork_works = no; then
    
    a

    if test "$ac_cv_func_vfork_works" = no; then

    Parece ser un bug de la versi�n 2.12 de autoconf. H�game saber si 
    tiene una soluci�n mejor (qvwm-support@qvwm.org).

P. Qvwm muestra "Can't open display" al arrancar.
R. Intenta arrancar qvwm desde una consola. (La consola es una pantalla
   al estilo MS-DOS que b�sicamente no puede mostrar gr�ficos.) Ya que 
   qvwm es un manejador de ventanas que s�lo puede correr bajo X Window, 
   arranque X Window primero mediante xinit (o startx). Si modifica 
   ~/.xinitrc seg�n INSTALL.es, qvwm arranca autom�ticamente.

Funcionamiento
--------------
P. No puedo cerrar una ventana pulsando el bot�n de salir (bot�n [x] en
   la esquina superior derecha).
R. No se puede usar el bot�n de salir cuando la ventana est� supendida. 
   Seleccione Matar en el men� de control para forzar la salida.

P. Pulso el bot�n de maximizar pero la ventana no se maximiza.
R. Algunas aplicaciones limitan el tama�o m�zimo de la ventana. En ese caso
   la ventana se mueve a la esquina superior izquierda y pierde el marco.

P. No puedo cambiar el tama�o de una ventana.
R. Algunas aplicaciones limitan el tama�o m�nimo y/o m�ximo de la ventana.
   En ese caso, no se puede cambiar el tama�o por encima de la limitaci�n.

P. Tarda un poco en pasar algo una vez pulsado un bot�n.
R. Parece ser la naturaleza del sistema X Window.

P. Qvwm termina de forma rara y el teclado se queda colgado.
R. Conectese en remoto y lance qvwm 'qvwm -display esa_m�quina_con_problemas:0'
   y cierre correctamente.

P. Tarda un poco en salir el men� de inicio despu�s de seleccionar un bot�n.
R. Para hacerlo m�s r�pido, qvwm lee los pixmaps cuando se pulsa el bot�n de
   inicio la primera vez. De modo que el men� de inicio se retrasa la primera
   vez.

P. No se ve la ventana, aunque hay un bot�n en la barra de tareas y no est�
   minimizada. 
R. Puede que se muestre fuera de la ventana virtual. Seleccione 'mover' en
   el bot�n de la barra de tareas con un click del bot�n derecho del rat�n y
   mueva el cursor. Si hay suerte la ver� dentro de la ventana virtual. Tambi�n
   puede cambiar el tama�o de la ventana virtual y reiniciar qvwm.

P. No puedo arrastrar la ventana a otra pantalla de forma correcta.
R. Mueva el rat�n un poco sobre el borde de la pantalla. O puede modificar el
   valor de PagingBeltSize, haciendo mayor.

Configuraci�n
-------------
P. No puedo hacer doble click de forma correcta.
R. Aumente el valor de DoubleClickTime o DoubleClickRange.

P. Me gustar�a mover la barra de t�tulo m�s r�pido al minimizar o maximizar.
R. Disminuya el valor de TitlebarMotionSpeed.

P. Me gustar�a cambiar de ventana virtual m�s r�pido.
R. Disminuya el valor de PagingResistance.

P. Me gustar�a cambiar el tama�o de la ventana virtual.
A. Cambie el valor de PagingSize.

P. Quiero cambiar el tama�o y la posici�n del paginador.
R. Cambie el valor de PagerGeometry.

P. Quiero cambiar el fondo del escritorio.
R. Especifique la ruta completa del fichero xpm que quiere usar.

P. No quiero la caja de di�logos al salir.
R. Ajuste UseExitDialog False.

P. Mi PC tiene una CPU lenta, as� que s�lo quiero ver el marco al arrastrar.
R. Ajuste OpaqueMove False.

P. Quiero la ventana activa bajo el cursor del rat�n.
R. Ajuste ClickToFocus False.

P. Prefiero que la ventana activa sea la que est� m�s arriba.
R. Ajuste AutoRaise True.

P. Quiero cambiar el retardo de AutoRaise.
R. Disminuya el valor de AutoRaiseDelay.

P. Quiero usar mis propios iconos. 
R. Especifique su directorio de iconos y ponga los ficheros xpm all�. El 
   tama�o de los iconos es de 32x32.

P. Una ventana de kinput2 parpadea cuando introduzco caracteres japoneses
   en Netscape.
R. A�ada la siguiente l�nea en la secci�n [Applications] de su fichero de 
   configuraci�n:

   "Kinput2"	NO_FOCUS

---
Traducido parcialmente por Yukihiro Nakai <Nakai@Mlab.t.u-tokyo.ac.jp>
Traducci�n traducida por Bill Richter <wlr@jps.net>
Traducida al espa�ol por Benjam�n Albi�ana <foobar@escomposlinux.org>
