function goToPage(page) {
  window.location.href = page;
}

document.addEventListener('DOMContentLoaded', () => {
  const calculateBtn = document.getElementById('calculate-btn');
  if (calculateBtn) {
    calculateBtn.addEventListener('click', () => {
      const weight = parseFloat(document.getElementById('weight').value);
      const peptide = document.getElementById('peptide').value;
      const protocol = document.getElementById('protocol').value;

      let dosage = '--';

      if (weight && peptide && protocol) {
        switch (protocol) {
          case 'standard':
            dosage = (weight * 3).toFixed(2) + ' mcg';
            break;
          case 'advanced':
            dosage = (weight * 5).toFixed(2) + ' mcg';
            break;
          case 'therapeutic':
            dosage = (weight * 8).toFixed(2) + ' mcg';
            break;
        }
      }

      document.getElementById('dosage-output').textContent = dosage;
    });
  }
});

