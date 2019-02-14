module.exports = function valOrMeow(val) {
  const says = [
    'Meow',
    'Nya',
    'Prrrr',
    'Mew',
    'Mlem',
    'Mrrow',
    'Purr',
    'Gurrhr'
  ];

  const r = Math.floor(Math.random() * says.length);

  if (r < says.length / 2) {
    return val;
  }

  return says[r];
}
