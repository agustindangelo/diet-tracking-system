# TO-DO

## Frontend
1. Página de login (mutación de graphql: login)
2. Formularios de registro para nutricionista (mutacion de graphql: registerNutritionist)
3. Formularios de registro para paciente (mutacion de graphql: registerPatient)
4. Menú de selección de nutricionista para el paciente ya registrado (query de gql: getAllNutritionists y mutación: registerAttentionRequest(idPaciente, idNutricionista))

## Backend
1. [HECHO] Programar los modelos de usuario, nutricionista y paciente
2. [HECHO] Programar los resolvers para las mutaciones de registerNutritionis registerPatient y createAttentionRequest
3. Programar las mutaciones acceptAttentionRequest(idPaciente, idNutricionista)
4. Programar la query getAllNutritionists --> devuelve todos los nutricionista registrados
5. Programar la query getPatients(idNutricionista) --> para un determinado id de nutricionista, devolver todos sus pacientes
6. Programar la query getAttentionRequests(idNutricionista) --> para un determinado nutricionista, devolver sus solicitudes de atencion (pendientes o no)
