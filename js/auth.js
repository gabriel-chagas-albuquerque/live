// Interação entre formularios

document.addEventListener("DOMContentLoaded", () => {
    // Alternar entre abas de login e cadastro
    const authTabs = document.querySelectorAll(".auth-tab")
    const authForms = document.querySelectorAll(".auth-form")
  
    authTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const tabName = tab.getAttribute("data-tab")
  
        // Atualizar abas ativas
        authTabs.forEach((t) => t.classList.remove("active"))
        tab.classList.add("active")
  
        // Mostrar formulário correspondente
        authForms.forEach((form) => {
          form.classList.remove("active")
          if (form.id === `${tabName}-form`) {
            form.classList.add("active")
          }
        })
      })
    })
  
    // Mostrar/ocultar senha
    const passwordToggles = document.querySelectorAll(".password-toggle")
  
    passwordToggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const passwordInput = toggle.previousElementSibling
        const icon = toggle.querySelector("i")
  
        if (passwordInput.type === "password") {
          passwordInput.type = "text"
          icon.classList.remove("fa-eye")
          icon.classList.add("fa-eye-slash")
        } else {
          passwordInput.type = "password"
          icon.classList.remove("fa-eye-slash")
          icon.classList.add("fa-eye")
        }
      })
    })
  

  
    // Alternar campos baseado no tipo de usuário
    const tipoAlunoRadio = document.getElementById("tipo-aluno")
    const tipoProfessorRadio = document.getElementById("tipo-professor")
    const codigoTurmaContainer = document.getElementById("codigo-turma-container")
    const professorInfo = document.getElementById("professor-info")
  
    function toggleUserTypeFields() {
      if (tipoAlunoRadio.checked) {
        codigoTurmaContainer.style.display = "block"
        professorInfo.style.display = "none"
        document.getElementById("codigo-turma").setAttribute("required", "")
      } else {
        codigoTurmaContainer.style.display = "none"
        professorInfo.style.display = "flex"
        document.getElementById("codigo-turma").removeAttribute("required")
      }
    }
  
    // Inicializar campos
    toggleUserTypeFields()
  
    // Adicionar event listeners para os radio buttons
    tipoAlunoRadio.addEventListener("change", toggleUserTypeFields)
    tipoProfessorRadio.addEventListener("change", toggleUserTypeFields)
  
    // Validação do formulário de cadastro
    const cadastroForm = document.getElementById("cadastro-form")
  
    cadastroForm.addEventListener("submit", (e) => {
      e.preventDefault()
  
      const nome = document.getElementById("cadastro-nome").value
      const email = document.getElementById("cadastro-email").value
      const tipoUsuario = document.querySelector('input[name="tipo-usuario"]:checked').value
      const codigoTurma = document.getElementById("codigo-turma").value
      const password = document.getElementById("cadastro-password").value
      const confirmPassword = document.getElementById("cadastro-confirm-password").value
      const terms = document.getElementById("terms").checked
  
      // Validar se as senhas coincidem
      if (password !== confirmPassword) {
        alert("As senhas não coincidem!")
        return
      }
  
      // Validar se os termos foram aceitos
      if (!terms) {
        alert("Você precisa aceitar os termos de serviço!")
        return
      }
  
      // Validar código da turma para alunos
      if (tipoUsuario === "aluno" && !codigoTurma) {
        alert("O código da turma é obrigatório para alunos!")
        return
      }
  
      // Aqui você pode adicionar a lógica de cadastro
      console.log("Cadastro:", { nome, email, tipoUsuario, codigoTurma, password })
  
      // Simulação de cadastro bem-sucedido
      if (tipoUsuario === "professor") {
        alert("Cadastro realizado com sucesso! Aguarde a aprovação da administração.")
      } else {
        alert("Cadastro realizado com sucesso! Você já pode acessar a turma.")
      }
    })
  })