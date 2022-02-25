# Generated by Django 3.2.10 on 2022-02-10 07:00

import Apps.Profile.models
import Apps.Profile.storages
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Profile', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='avatar',
            field=models.ImageField(blank=True, null=True, storage=Apps.Profile.storages.LocalStorage(), upload_to=Apps.Profile.models.user_directory_path, verbose_name='Profile Picture'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
