var documentarios = document.getElementById("documentarios");
var listaDocumentarios = [
  {
    nome: "Sou um Assassino",
    link: "https://www.youtube.com/watch?v=tR53rQeU7uo",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSX5pw80r6fHXywa5e_FI-kA5KiBnkEwqHlA&usqp=CAU"
  },
  {
    nome: "Sou um Assassino em Liberdade",
    link: "https://www.youtube.com/watch?v=SL_4XmR83hM&t=25s",
    img:
      "https://cdn.fstatic.com/media/movies/covers/2020/08/AAAABZPvp_FovdxPt96uXX5DJ8yfVQLyZ-hBlY7scHyvJ-_G1mPppDGt6kMWvtB3zx_JNMGacJ.jpg"
  },
  {
    nome: "Mistérios sem Solução",
    link: "https://www.youtube.com/watch?v=m6gGylnspZw",
    img:
      "https://www.scnews.net.br/envios/2020/07/28/1eaec0bbdba260ac62fe4080e4651b900bb04786.jpg"
  },
  {
    nome: "Gênio Diabólico",
    link: "https://www.youtube.com/watch?v=Qpdb9zo_1t8",
    img:
      "https://c.flikshost.com/80158319/posters/AAAABX1Df_X5clRZxJX7JQfhTxKw9M049bKlpHzD7UiOImxC1YtpM5MnstDaSesS-4ov_7lfJpCI5ClieBxFve_epO9XODHXJeS8V638OQFcRG3r0ZRZ5PFjbkEkydQ.jpg"
  },
  {
    nome: "O Estripador",
    link: "https://www.youtube.com/watch?v=LcFtS9wpoF0",
    img:
      "https://interprete.me/wp-content/uploads/2020/12/O-Estripador-de-Yorkshire-Netflix-Peter-Sutcliffe-serie-documental-2.jpg"
  },
  {
    nome: "Night Stalker",
    link: "https://www.youtube.com/watch?v=Mva2nGveYss",
    img:
      "https://www.indicafilmes.com.br/painel/public/img/files/nightstalker-documentario-imagem-poster.jpg"
  },
  {
    nome: "Na cola dos Assassinos",
    link: "https://www.youtube.com/watch?v=zXeMyQnMemA",
    img: "https://br.web.img3.acsta.net/pictures/21/11/04/16/42/2797118.jpg"
  },
  {
    nome: "Cena do Crime O Assassino da Times Square",
    link: "https://www.youtube.com/watch?v=wYU8-bueneo",
    img: "https://br.web.img3.acsta.net/pictures/21/12/16/18/46/0810165.jpg"
  },
  {
    nome: "As 24 personalidades de Billy Milligan",
    link: "https://www.youtube.com/watch?v=gUjtViCsb8E",
    img:
      "https://i0.wp.com/trilhadomedo.com/wp-content/uploads/2021/08/As-24-Personalidades-de-Billy-Milligan-tdm-netflix-doc.jpg?ssl=1"
  },
  {
    nome: "Cena do Crime Mistério e Morte no Hotel Cecil",
    link: "https://www.youtube.com/watch?v=UkoboFsY9_g",
    img:
      "https://media.fstatic.com/_X9V2UeYWD7wQUj9qdXSQDEiaoU=/210x312/smart/media/movies/covers/2021/02/MV5BYWVkMTc3MDctZWRmNy00NTI1LTk1MTEtOWI1ODhlZjg0NzQ1XkEyXkFqcGdeQX_rrODaFi.jpg"
  }
];

function Inserir() {
  var input1 = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;
  var input3 = document.getElementById("input3").value;
  var nomeDocumentarios = listaDocumentarios.filter(function (documentario) {
    return documentario.nome === input3;
  });

  if (nomeDocumentarios.length > 0) {
    alert("Este documentário já está no catálogo.");
    return;
  }

  // documentarios.innerHTML += ("<a href=" + input2 + ' target="_blank">' + "<img src=" + input1 + " class='img'>" + "</a>");
  documentario.innerHTML +=
    "<div class='tooltip'> <span class='tooltiptext'>" +
    input3 +
    "</span> <a href=" +
    input2 +
    ' target="_blank">' +
    "<img src=" +
    input1 +
    " class='img'>" +
    "</a> </div>";
  listaDocumentarios.push({
    nome: input3,
    link: input2,
    img: input1
  });

  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
  document.getElementById("input3").value = "";
}

function preencherDocumentarios() {
  for (var i = 0; i < listaDocumentarios.length; i++) {
    documentario.innerHTML +=
      "<div class='tooltip'> <span class='tooltiptext'>" +
      listaDocumentarios[i].nome +
      "</span> <a href=" +
      listaDocumentarios[i].link +
      ' target="_blank">' +
      "<img src=" +
      listaDocumentarios[i].img +
      " class='img'>" +
      "</a> </div>";
  }
}

function Remover() {
  var input4 = document.getElementById("inputRemover").value;
  var nomeDocumentarios = listaDocumentarios.filter(function (documentario) {
    return documentario.nome != input4;
  });

  if (nomeDocumentarios.length === listaDocumentarios.length) {
    alert("Este documentário não está no catálogo.");
    return;
  } else {
    listaDocumentarios = nomeDocumentarios;
    limpaDocumentarios();
    preencherDocumentarios();
  }
}

function limpaDocumentarios() {
  documentario.innerHTML = "";
}
preencherDocumentarios();