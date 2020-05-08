package com.resumewebsitebuilder.service;

import java.util.Date;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

public class EmailVerificationService {

	public void sendmail(String mailAddress, JavaMailSender javaMailSender, String otp) throws MailException, AddressException, MessagingException {
		
		SimpleMailMessage mail = new SimpleMailMessage();
		mail.setTo(mailAddress);
		mail.setFrom("resumebuilderdj2020@gmail.com");
		mail.setSubject("Email Verification OTP");
		mail.setText("Welcome to Resume Builder This is system generated OTP "+ otp+". Do not share this OTP with others. This One Time Password is valid for next 15 minutes.");
		//javaMailSender.send(mail);
		
		Properties props = new Properties();
		   props.put("mail.smtp.auth", "true");
		   props.put("mail.smtp.starttls.enable", "true");
		   props.put("mail.smtp.host", "smtp.gmail.com");
		   props.put("mail.smtp.port", "587");
		   
		   Session session = Session.getInstance(props, new javax.mail.Authenticator() {
		      protected PasswordAuthentication getPasswordAuthentication() {
		         return new PasswordAuthentication("resumebuilderdj2020@gmail.com", "resumeBuilder@2020");
		      }
		   });
		   Message msg = new MimeMessage(session);
		   msg.setFrom(new InternetAddress("resumebuilderdj2020@gmail.com", false));

		   String txtMsg = "<h1>Welcome to Resume Builder</h1> "
		   					+ "<br> "
		   					+ "<h4>This is system generated OTP D-<u><b>"+otp+"<b></u> .</h4> "
		   					+ "<br>"
		   					+ "<h4><u> Note: Do not share this OTP with others."
		   					+ "<br>"
		   					+ "This One Time Password is valid for next 15 minutes.</u></h4>";
		   
		   msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(mailAddress));
		   msg.setSubject("Email Verification OTP");
		   msg.setContent(txtMsg, "text/html");
		   msg.setSentDate(new Date());

		   MimeBodyPart messageBodyPart = new MimeBodyPart();
		   messageBodyPart.setContent(txtMsg, "text/html");

		   Multipart multipart = new MimeMultipart();
		   multipart.addBodyPart(messageBodyPart);

		   msg.setContent(multipart);
		   
		   //javaMailSender.send(msg);
		   Transport.send(msg);   

	}
	
}
