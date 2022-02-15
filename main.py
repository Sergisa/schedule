from openpyxl import load_workbook
import json

wb = load_workbook(filename='schedule.xlsx')
ws = wb['TDSheet']
lastDate = ''
dates = []
schedule = {}
lastNumber = ''
flag = False
lec = {}.copy()
lecs = []
groups = []


for row in ws.rows:
    for cell in row:
        if cell.value is not None:

            if "2022" in cell.value:
                if len(lec) > 0:
                    if flag and len(lec['group']) > 0 and lec['name'] != "" and lec['type'] != "" and lec['number'] != "":
                        if len(lec['group']) == 1:
                            lec['group'] = lec['group'][0]
                        schedule[lastDate].append(lec.copy())
                        lec = {}.copy()
                lastDate = cell.value
                dates.append(cell.value)
                schedule[lastDate] = [].copy()
                flag = True

            if "пара" in cell.value:

                if len(lec) > 0:
                    if flag and len(lec['group']) > 0 and lec['name'] != "" and lec['type'] != "" and lec['number'] != "":
                        if len(lec['group']) == 1:
                            lec['group'] = lec['group'][0]
                        schedule[lastDate].append(lec.copy())
                        lec = {}.copy()
                lec = {}.copy()
                lec['group'] = [].copy()
                lec['number'] = int(cell.value.replace(" пара", ""))
                if lec['number'] == 1:
                    lec['start'] = '9:00'
                    lec['end'] = '10:20'
                if lec['number'] == 2:
                    lec['start'] = '10:30'
                    lec['end'] = '11:50'
                if lec['number'] == 3:
                    lec['start'] = '12:40'
                    lec['end'] = '14:00'
                if lec['number'] == 4:
                    lec['start'] = '14:10'
                    lec['end'] = '15:30'
                if lec['number'] == 5:
                    lec['start'] = '15:40'
                    lec['end'] = '17:00'

            if ("б/о" in cell.value) and ("ИТ" in cell.value):
                lec['group'].append(cell.value)

            if ("Проектирование" in cell.value) or ("Информационные" in cell.value) or ("Проектный" in cell.value):
                lec['name'] = cell.value

            if ("Лекции" in cell.value) or ("Практические занятия" in cell.value):
                lec['type'] = 1 if (cell.value == 'Лекции') else 2

with open('schedule.json', 'w') as outfile:
    json.dump(schedule, outfile, ensure_ascii=False, indent=4)
