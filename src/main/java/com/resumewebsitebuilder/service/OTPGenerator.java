package com.resumewebsitebuilder.service;


import java.sql.Date;
import java.sql.Time;
import java.util.Random;

import com.resumewebsitebuilder.model.OTP;

public class OTPGenerator {

	public OTP generateOTP(String email) {
		
		Random random = new Random();

		String otpText = "";
		while(otpText.length()!=6) {
			otpText = otpText + random.nextInt(9);
			System.out.println(otpText);
		}

		Long dateTime = System.currentTimeMillis();
		
		OTP otp = new OTP();
		otp.setEmail(email);
		otp.setOtp(otpText);
		otp.setDate(new Date(dateTime));
		otp.setTime(new Time(dateTime));
		
		
		return otp;   
	}
	
}
