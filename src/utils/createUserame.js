export function createUserName(username)
{
    const NAME = username.split(" ")[0];
    const SURNAME = username.split(" ")[1];
    return {
        short: `${NAME} ${SURNAME.length && SURNAME[0]}`,
        name: NAME,
        surname: SURNAME
    };
}
