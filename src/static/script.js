document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('settingsForm').addEventListener('submit', event => {
      const form = event.target

      window
        .axios({
          method: 'POST',
          url: '/api/settings',
          data: {
              repoName: form.elements.repoName.value,
              buildCommand: form.elements.buildCommand.value,
              mainBranch: form.elements.mainBranch.value,
              period: form.elements.period.value
          },
        })
        .then(() => {
          window.location.reload();
        });
  })
})