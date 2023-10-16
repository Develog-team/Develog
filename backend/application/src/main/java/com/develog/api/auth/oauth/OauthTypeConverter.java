package com.develog.api.auth.oauth;

import com.develog.oauth.OauthType;
import lombok.NoArgsConstructor;
import org.springframework.core.convert.converter.Converter;

import java.util.Locale;

@NoArgsConstructor
public class OauthTypeConverter implements Converter<String, OauthType> {
    @Override
    public OauthType convert(String type) {
        return OauthType.valueOf(type.toUpperCase(Locale.ROOT));
    }
}
