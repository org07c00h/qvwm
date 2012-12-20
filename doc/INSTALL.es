INSTALACI�N
-----------
qvwm se puede instalar de tres formas.

---------------------------------------------------------------------------
INSTALACI�N con configure
-------------------------
1. Ejecute './configure'.
   Por defecto, qvwm se instala en /usr/local/bin, y *.qvwmrc y
   pixmaps/* se instalan en /usr/local/share/qvwm. Si se cambia
   el prefijo (/usr/local), ejecute './configure --prefix=...' en 
   su lugar. Ejecute './configure --help' para ver otras opciones.

2. Ejecute 'make'. (o make CXX=gcc)

3. Ejecute 'make install'.

4. Copie system.qvwmrc a ~/.qvwmrc y cambielo a su gusto. En el manual
   hay m�s informaci�n sobre como escribir un fichero de configuraci�n.
   kanji.qvwmrc es un ejemplo de configuraci�n en kanji.
   french.qvwmrc es un ejemplo de configuraci�n en franc�s.

5. Copie default.qvwm-theme a ~/.qvwm-theme y modifique en ~/.qvwmrc

    include  .../qvwm/default.qvwm-theme

   a

    include   ~/.qvwm-theme

   Si modifica este fichero, Ud. puede enviar su propio tema a qvwm.

6. Modifique su ~/.xinitrc para arrancar X Window desde la consola
   (con xinit o startx) o ~/.xsession para acceder desde xdm. Si no
   hay un fichero de inicializaci�n, cree un fichero con el siguiente
   contenido:

    exec qvwm

   Si ya hay un fichero de inicializaci�n y al final del mismo se 
   incluye el nombre de otro manejador de ventanas, sustit�yalo por
   "qvwm". Por ejemplo, si la �ltima l�nea es

    exec twm

   sustit�yala por

    exec qvwm

   Si el fichero no incluye ning�n manejador de ventanas, borre "exec"
   del final del fichero y a�ada "&" al final de la l�nea si la hubiera, 
   e inserte "exec qvwm" al final del fichero. Como resultado, por 
   ejemplo, el fichero de inicializaci�n queda as�:

    xterm &
    exec qvwm

   Para lanzar qvwm desde la consola, ejecute xinit (o startx).


---------------------------------------------------------------------------
INSTALACI�N con Imakefile
-------------------------
1. Modifique QVWMDIR in Config.tmpl apuntando al directorio donde Ud.
   instale system.qvwmrc, e IMGDIR donde instale los pixmaps.
   Modifique el resto de las variables ajust�ndolas a su entorno. 

2. Ejecute 'xmkmf -a'.

3. Ejecute 'make'. (o make CXX=gcc)

4. Ejecute 'make install' y 'make install.man'.

5. Igual que 4. en INSTALACI�N con configure.

6. Igual que 5. en INSTALACI�N con configure.

7. Igual que 6. en INSTALACI�N con configure.


---------------------------------------------------------------------------
INSTALACI�N con Makefile.std
----------------------------
1. Modifique Makefile.std en el directorio raiz.

2. Ejecute 'make -f Makefile.std'. (o make -f Makefile.std CXX=gcc)

3. Ejecute 'make -f Makefile.std install'.

4. Igual que 4. en INSTALACI�N con configure.

5. Igual que 5. en INSTALACI�N con configure.

6. Igual que 6. en INSTALACI�N con configure.


---------------------------------------------------------------------------
PRECAUCIONES
------------
- Utilice las opciones por defecto si no entiende el significado de
  las variables. si se producen errores durante la compilaci�n o el
  enlazado, puede modificar las opciones en funci�n de esos errores.

- qvwm usa las bibliotecas Imlib o Xpm. No se puede compilar sin 
  alguna de ellas.

- Si el make est�ndar de Sun da alg�n problema, es conveniente usar gmake.

- Pueden darse errores de compilaci�n si se usa yacc y lex en vez de bison
  y flex. Se incluye un yaccsrc.cc y un lexsrc en el paquete, as� que 
  probablemente no haya problemas. Cuando el compilador rehaga yaccsrc.cc
  y lexsrc.cc con su fecha y hora, renu�velos con el comando touch.

- A veces el sistema no tiene un stdarg.h en /usr/include. Pero si tiene
  gcc instalado, es posible que se encuentre en /usr/lib/gcc-lib/M�QUINA/
  VERSI�N/include. Pruebe a copiarlo a /usr/include.

- .qvwm-theme simplemente recoge las variables para el tema de .qvwmrc.
  Estas variables tambi�n se definen en .qvwmrc, pero se han separado en 
  otro fichero para que se puedan usar temas de otros.

---
Traducido parcialmente por Yukihiro Nakai <Nakai@Mlab.t.u-tokyo.ac.jp>
raducida al espa�ol por Benjam�n Albi�ana <foobar@escomposlinux.org>
