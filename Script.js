function generateTicket() {
    // Captura os valores do formulário
    let eventName = document.getElementById("eventName").value;
    let eventDate = document.getElementById("eventDate").value;
    let GitProfile = document.getElementById("GitProfile").value;
    let attendeeName = document.getElementById("attendeeName").value;
    let ticketType = document.getElementById("ticketType").value;
    let attendeePhoto = document.getElementById("attendeePhoto").files[0]; // Captura o arquivo de imagem

    // Verifica se todos os campos foram preenchidos
    if (!eventName || !eventDate || !GitProfile || !attendeeName) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Formata a data para um formato mais amigável
    let formattedDate = new Date(eventDate).toLocaleString("pt-BR", {
        day: "2-digit", month: "2-digit", year: "numeric",
        hour: "2-digit", minute: "2-digit"
    });

    // Criar um contêiner para o ingresso
    let ticketDiv = document.createElement("div");
    ticketDiv.classList.add("ticket");

    // Criar um elemento de imagem (se houver foto)
    if (attendeePhoto) {
        let reader = new FileReader();
        reader.onload = function (e) {
            ticketDiv.innerHTML = `
                <h2>${eventName}</h2>
                <img src="${e.target.result}" alt="Foto do participante">
                <p><strong>Participante:</strong> ${attendeeName}</p>
                <p><strong>Data:</strong> ${formattedDate}</p>
                <p><strong>GitProfile:</strong> ${GitProfile}</p>
                <p><strong>Tipo:</strong> ${ticketType}</p>
            `;
        };
        reader.readAsDataURL(attendeePhoto);
    } else {
        ticketDiv.innerHTML = `
            <h2>${eventName}</h2>
            <p><strong>Participante:</strong> ${attendeeName}</p>
            <p><strong>Data:</strong> ${formattedDate}</p>
            <p><strong>GitProfile:</strong> ${GitProfile}</p>
            <p><strong>Tipo:</strong> ${ticketType}</p>
        `;
    }

    // Adiciona o ingresso à lista
    document.getElementById("ticketList").appendChild(ticketDiv);

    // Limpa os campos do formulário
    document.getElementById("ticketForm").reset();
}
