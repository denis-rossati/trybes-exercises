const Fazerperfil = (name) => {
  const firstName = name.split(' ');
  const employeesInfo = {};
  employeesInfo.nomeCompleto = name;
  employeesInfo.email = `${firstName[0]}@trybe.com`;
  return employeesInfo;
}

const newEmployees = (call) => {
  const employeesInfo = {};
  employeesInfo.id1 = call('Pedro Guerra');
  employeesInfo.id2 = call('Luiza Drumond');
  employeesInfo.id3 = call('Carla Paiva');
  return employeesInfo;
}
console.log(newEmployees(Fazerperfil))
