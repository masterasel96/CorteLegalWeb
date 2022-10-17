# CorteLegalWeb
Front for Corte Legal Web Lawyers 

# Router
-- Apache2 server .htaccess --

Options +FollowSymLinks
RewriteEngine On

RewriteCond %{SCRIPT_FILENAME} !-d
RewriteCond %{SCRIPT_FILENAME} !-f

RewriteRule ^.*$ ./index.html

-- Put in apache2.conf --

<Directory /var/www/html/CorteLegalWeb>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
</Directory>

-- Execute --

a2enmod rewrite && systemctl restart apache2.service

