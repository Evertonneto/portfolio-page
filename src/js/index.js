// script.js
document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    // Obter os valores do formulário
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Verificar se o EmailJS foi configurado corretamente
    const serviceID = "service_kihfizx"; // Substitua pelo seu Service ID do EmailJS
    const templateID = "template_hfjxm7a"; // Substitua pelo Template ID do EmailJS
    const publicKey = "m40o4vd5qnUwDECp1"; // Substitua pela Public Key do EmailJS
  
    try {
      const response = await emailjs.sendForm(serviceID, templateID, '#contactForm');
  
      document.getElementById("responseMessage").innerText = "Mensagem enviada com sucesso!";
      document.getElementById("contactForm").reset();
      setInterval(() => {
        document.getElementById("responseMessage").innerText = ""
      }, 3000);
    } catch (error) {
      console.error("Erro ao enviar a mensagem:", error);
      document.getElementById("responseMessage").innerText = "Erro ao enviar a mensagem. Tente novamente mais tarde.";
    }
  });
  