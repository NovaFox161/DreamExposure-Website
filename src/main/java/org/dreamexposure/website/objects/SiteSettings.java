package org.dreamexposure.website.objects;

import java.util.Properties;

public enum SiteSettings {
    SQL_HOST, SQL_USER, SQL_PASSWORD, SQL_DB, SQL_PORT, SQL_PREFIX, TIME_OUT, PORT, LOG_FOLDER, RECAP_KEY, SMTP_HOST, SMTP_PORT, EMAIL_USER, EMAIL_PASS;

    private String val;

    SiteSettings() {
    }

    public static void init(Properties properties) {
        for (SiteSettings s : values()) {
            s.set(properties.getProperty(s.name()));
        }
    }

    public String get() {
        return val;
    }

    public void set(String val) {
        this.val = val;
    }
}