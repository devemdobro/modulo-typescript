// enum Colors {
// 	Red,
// 	Blue,
// 	Green,
// }

// //podemos percorrer o enum usando o for
// for (const key in Colors) {
// 	console.log(key);
// }

// function showColor(color) {
// 	console.log(color);
// }

// showColor(Colors.Red); // Exibe "Vermelho"

// enum UserResponse {
// 	No = 0,
// 	Yes = 1,
// }

// function respondedEmail(recipient: string, userResponse: UserResponse): void {
// 	// ... salvar no banco se o usuário respondeu ou não
// }

// respondedEmail('Caroline', UserResponse.Yes);

// enum TradeType {
// 	ACAO = 9281,
// 	TESOURO_DIRETO = 3221,
// 	TESOURO_SELIC = 6554,
// }

// saveTrade(TradeType.TESOURO_DIRETO)

// enum StatusCodes {
// 	OK = 200,
// 	BadRequest = 400,
// }

// StatusCodes.BadRequest

// enum gender {
// 	M = 'Masculino',
// 	F = 'Feminino',
// }

enum StatusCodes {
	OK = 200,
	BadRequest = 400,
}

const ok = StatusCodes.OK; //200
const indexOk = StatusCodes['OK']; //200
const stringBadRequest = StatusCodes[400]; //BadRequest
