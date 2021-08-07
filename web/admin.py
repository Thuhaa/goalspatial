from django.contrib import admin
from .models import Project, Course
from django.contrib.auth.models import Group

class CourseAdmin(admin.ModelAdmin):
	list_display = ('title', 'category', 'date_created', 'link')
class ProjectAdmin(admin.ModelAdmin):
	list_display = ('title', 'date_created', 'link')


admin.site.register(Course, CourseAdmin)
admin.site.register(Project, ProjectAdmin)
admin.site.unregister(Group)