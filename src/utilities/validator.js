export default function validateValues(string, storageCallback, modalCallback, object) {
  if (string >= 1) {
    alert('por favor agregar todos los campos');
  } else {
    storageCallback(object);
    modalCallback();
  }
}
