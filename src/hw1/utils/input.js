export function getArguments() {
  const argv=process.argv;

  if (argv.length < 3) {
    console.error('Expected at least one argument!');
    process.exit(1);
  }

  try {
    return  argv.slice(2).join('')
  } catch (err) {
    process.exit(1);
  }
}

export default {
  getArguments,
};
