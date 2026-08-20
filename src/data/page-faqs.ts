// FAQs específicas por página (Método PRISMA — capa S / AEO).
// Preguntas reales investigadas (People Also Ask, foros, reseñas de la zona).
// No repetir las FAQs del home (src/data/faqs.ts).

export interface PageFaq {
  question: string;
  answer: string;
}

export const menuFaqs: PageFaq[] = [
  {
    question: "¿Cuál es la diferencia entre el pozole rojo y el blanco, y cuál pica más?",
    answer:
      "El blanco es la base: el caldo natural de la cocción de la carne con maíz cacahuazintle, sin chile, para que el grano hable solo. El rojo parte de esa misma base y se tiñe con guajillo y ancho, chiles secos que dan color y profundidad pero casi nada de picor. En Poxahuac ambos cuestan entre $110 y $130 MXN, y el picante lo pones tú en la mesa con el chile de la guarnición.",
  },
  {
    question: "¿Con qué se acompaña el pozole en Poxahuac?",
    answer:
      "Todos nuestros pozoles llegan con la guarnición completa incluida: lechuga rebanada, rábano, cebolla picada, orégano, limón y tostadas. Así cada quien arma su plato a su gusto, como debe ser. No pagas extra por la guarnición: va incluida en el precio de $110-130 MXN.",
  },
  {
    question: "¿Tienen pozole vegetariano? ¿De qué está hecho?",
    answer:
      "Sí, y es fijo en el menú, no de temporada. Lo preparamos con hongos, calabaza y chayote sobre la misma base de maíz pozolero, y llega con la misma guarnición completa que el tradicional, a $110 MXN. Somos de las pocas opciones en Amecameca con un plato fuerte vegetariano permanente en la carta.",
  },
  {
    question: "¿Qué carne lleva el pozole de Poxahuac?",
    answer:
      "Tú eliges: pozole de pollo (pechuga desmenuzada, $120 MXN) o de cerdo (carne tierna cocida lentamente, $130 MXN), en versión roja o blanca. También hay mixto y vegetariano. El maíz es cacahuazintle de la región de los volcanes, cocido hasta que revienta y queda esponjoso — de ahí nuestro nombre.",
  },
  {
    question: "¿Qué más hay en el menú además de pozole y cuánto gasto por persona?",
    answer:
      "Tenemos antojitos tradicionales para completar la mesa: quesadillas, tlacoyos y sopes recién hechos. El pozole cuesta entre $110 y $130 MXN, y con bebida y un antojito sales en unos $180-200 por persona — precio de pueblo, sazón de pozolería.",
  },
];

export const reservacionesFaqs: PageFaq[] = [
  {
    question: "¿Hay que reservar para comer en Poxahuac?",
    answer:
      "Entre semana normalmente no hace falta: llegas y te sentamos. Pero sábados, domingos y puentes el centro de Amecameca se llena de visitantes de CDMX, así que esos días sí te conviene apartar mesa. Reservar es gratis y por WhatsApp te toma dos minutos.",
  },
  {
    question: "¿Cómo reservo y tiene algún costo?",
    answer:
      "Se reserva por WhatsApp: nos escribes con día, hora y número de personas, te confirmamos y listo. No tiene costo ni pedimos anticipo. Si tus planes cambian, avísanos por el mismo chat para liberar tu mesa.",
  },
  {
    question: "¿Reciben grupos grandes o familias con niños?",
    answer:
      "Claro que sí. Para grupos de 6 personas o más te recomendamos reservar por WhatsApp para asegurar mesa junta, de preferencia en la terraza. Con niños funciona muy bien: hay antojitos que les encantan (quesadillas, sopes) y el pozole se puede compartir, con platos fuertes de $110 a $130 MXN.",
  },
  {
    question: "¿En qué fechas conviene reservar con más anticipación?",
    answer:
      "Septiembre es nuestra temporada más alta: por las fiestas patrias el pozole es el platillo del mes y el fin de semana del Grito se llena todo. También conviene adelantarse en la Feria de la Nuez (agosto), en puentes y los domingos de tianguis. En esas fechas, escríbenos por WhatsApp con varios días de anticipación.",
  },
];

export const ubicacionFaqs: PageFaq[] = [
  {
    question: "¿Hay autobús directo de CDMX a Amecameca y cuánto cuesta?",
    answer:
      "Sí: los autobuses Volcanes salen de la TAPO con frecuencia todos los días, el viaje dura alrededor de 1 hora 10 minutos y el boleto ronda los $40-60 MXN. La terminal de Amecameca queda a unos minutos caminando del centro y de Poxahuac, así que puedes hacer la escapada redonda en el día sin auto.",
  },
  {
    question: "¿Cuánto se hace de Puebla a Amecameca?",
    answer:
      "En auto son unos 120 km combinando autopista y la federal México-Cuautla, aproximadamente 1 hora 30 a 1 hora 45. En transporte público no hay ruta directa cómoda: se hace vía CDMX (TAPO) y toma más de 3 horas, así que desde Puebla conviene venir en auto. Llegando al centro de Amecameca, Poxahuac te queda de paso sobre la ruta de los volcanes.",
  },
  {
    question: "¿Dónde queda Poxahuac si voy al Paso de Cortés o al Izta?",
    answer:
      "Amecameca es la base natural de la ruta: el Paso de Cortés está a unos 23 km del centro, alrededor de 40 minutos en auto. Muchos montañistas desayunan en el pueblo antes de subir y bajan directo por un pozole caliente: nosotros servimos hasta las 20:30 (viernes y sábado hasta las 21:00).",
  },
  {
    question: "¿Dónde me estaciono en el centro de Amecameca en domingo de tianguis?",
    answer:
      "El domingo el tianguis toma varias calles del centro y los espacios públicos se llenan temprano, así que conviene llegar antes de las 11:00 o buscar estacionamientos privados en las calles aledañas a la plaza. Si vienes a comer con nosotros no hay problema: Poxahuac cuenta con estacionamiento para clientes, incluso en los días más concurridos.",
  },
  {
    question: "¿Qué puedo visitar caminando desde Poxahuac?",
    answer:
      "Estamos en pleno centro de Amecameca, así que todo el plan clásico te queda a pie: la plaza principal, el mercado y el Santuario del Sacromonte, cuya subida toma 20-30 minutos desde la plaza y regala el mejor mirador del pueblo hacia el Popocatépetl y el Iztaccíhuatl. Bajando del cerro, el pozole caliente te queda a unos minutos.",
  },
];
