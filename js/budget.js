function forPerPerson()
{
    const persons=document.getElementById('perPersonBudget');
    const perPersonString= persons.value;
    const per_person_budget=parseFloat(perPersonString);

    const totalExpenses= per_person_budget*player.length;
    const person_expenses=document.getElementById('expenses');
    person_expenses.innerHTML=totalExpenses;
}
document.getElementById('calculateWithPlayer').addEventListener('click',function(){
    forPerPerson();
})

document.getElementById('Calculate-total').addEventListener('click',function(){
    const mangerBudget=document.getElementById('manager_budget');
    const mangerBudgetString= mangerBudget.value;
    const manger_budget_int=parseFloat(mangerBudgetString);

    const coachBudget=document.getElementById('coach_budget');
    const coachBudgetString= coachBudget.value;
    const coach_budget_int=parseFloat(coachBudgetString);

    const persons=document.getElementById('perPersonBudget');
    const perPersonString= persons.value;
    const per_person_budget=parseFloat(perPersonString);
    const totalExpenses= per_person_budget*player.length;

    const total=totalExpenses +manger_budget_int+ coach_budget_int;

    const overallTotal=document.getElementById('overall_total');
    overallTotal.innerHTML=total;
})