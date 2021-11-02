export default function validateValues(emptyInputs, storageCallback, modalCallback, object) {
  if (emptyInputs >= 1) {
    alert('por favor agregar todos los campos');
  } else {
    storageCallback(object);
    modalCallback();
  }
}
