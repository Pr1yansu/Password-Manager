package com.webweeb.backend.utils;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;
import java.nio.ByteBuffer;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.UUID;

public class EncryptionUtil {

    private static final String ALGORITHM = "AES/ECB/PKCS5Padding";

    private static SecretKeySpec getSecretKey(UUID uuid) {
        byte[] keyBytes = ByteBuffer.allocate(16)
                .putLong(uuid.getMostSignificantBits())
                .putLong(uuid.getLeastSignificantBits())
                .array();
        return new SecretKeySpec(keyBytes, "AES");
    }

    public static String encrypt(String plainText, UUID secretKey) throws Exception {
        SecretKeySpec keySpec = getSecretKey(secretKey);
        Cipher cipher = Cipher.getInstance(ALGORITHM);
        cipher.init(Cipher.ENCRYPT_MODE, keySpec);
        byte[] encryptedBytes = cipher.doFinal(plainText.getBytes(StandardCharsets.UTF_8));
        return Base64.getEncoder().encodeToString(encryptedBytes);
    }

    public static String decrypt(String cipherText, UUID secretKey) throws Exception {
        SecretKeySpec keySpec = getSecretKey(secretKey);
        Cipher cipher = Cipher.getInstance(ALGORITHM);
        cipher.init(Cipher.DECRYPT_MODE, keySpec);
        byte[] decryptedBytes = cipher.doFinal(Base64.getDecoder().decode(cipherText));
        return new String(decryptedBytes, StandardCharsets.UTF_8);
    }
}
