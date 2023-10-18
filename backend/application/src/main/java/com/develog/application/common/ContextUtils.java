package com.develog.application.common;

import org.springframework.security.core.context.SecurityContextHolder;

public class ContextUtils {

    public static Long getCurrentUserId(){
        return Long.parseLong(SecurityContextHolder.getContext().getAuthentication().getName());
    }
}
