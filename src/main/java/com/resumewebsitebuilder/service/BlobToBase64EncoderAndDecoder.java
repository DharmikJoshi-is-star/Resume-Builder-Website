package com.resumewebsitebuilder.service;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.Base64;

import org.hibernate.engine.jdbc.BlobProxy;

public class BlobToBase64EncoderAndDecoder {

	public Blob convertBase64ToBlob(String str, String file) throws IOException {
	
		if(str==null||str=="")
			return null;
		
		File pathFile = new File(file);
		FileOutputStream fos = new FileOutputStream(pathFile);
		String b64 = str.substring(str.indexOf(",") + 1);
	    byte[] decoder = Base64.getDecoder().decode(b64);
	    fos.write(decoder);
	    fos.close();
	 
	    FileInputStream fis = new FileInputStream(pathFile);
	    
	    return BlobProxy.generateProxy(fis, pathFile.length()) ;
	}
	
	public String convertBlobToBase64(Blob blob) throws SQLException, IOException {
		
		if(blob==null)
			return null;
		
		InputStream inputStream = blob.getBinaryStream();
		ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
		byte[] buffer = new byte[4096];
		int bytesRead = -1;

		while ((bytesRead = inputStream.read(buffer)) != -1) {
			outputStream.write(buffer, 0, bytesRead);
		}
		byte[] bytes = outputStream.toByteArray();
		String base64 = Base64.getEncoder().encodeToString(bytes);
		return base64;
	}
}
