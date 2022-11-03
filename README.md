# CorteLegalWeb
Front for Corte Legal Web Lawyers 

# Launch proyect in development
- Add environment.js in root project path
- Install dependencies --> npm install
- Run project in port 8080 --> npm run dev

# Router
-- Apache2 server .htaccess --

Options +FollowSymLinks
RewriteEngine On

RewriteCond %{SCRIPT_FILENAME} !-d
RewriteCond %{SCRIPT_FILENAME} !-f

RewriteRule ^.*$ ./index.html

-- Put in apache2.conf --

<Directory /var/www/html>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
</Directory>

-- Execute --

a2enmod rewrite && systemctl restart apache2.service

