# Uma entidade que quer recuperar sua senha através do seu email
import smtplib
import ssl


class User:
    def __init__(self, name, email, password, from_email, from_password):
        self.name = name
        self.email = email
        self.password = password
        self.from_email = from_email
        self.from_password = from_password


    def reset_password(self):
        meu_mailer = Mailer("password_reset@teste.com", "myverysafepassword", self.email)
        meu_mailer.send_email("Reset your password", "Instruções para resetar a senha, com o link de resetar")


class Mailer:
    def __init__(self, from_email, from_password, to_email):
        self.from_email = from_email
        self.from_password = from_password
        self.to_email = to_email

    def send_email(self, subject, message):
        body = f'Subject:{subject}\n\n{message}'.encode('utf-8')
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL(
            'smtp.gmail.com', 465, context=context
        ) as server:
            server.login(self.from_email, self.from_password)
            try:
                server.login(self.from_email, self.from_password)
            except (smtplib.SMTPRecipientsRefused, smtplib.SMTPSenderRefused):
                raise ValueError


myUser = User(
    'Valentino Trocatapa',
    'valentino@tinytoons.com',
    'Grana',
    'password_reset@test.com',
    'myverysafepassword'
)

myUser.reset_password()
