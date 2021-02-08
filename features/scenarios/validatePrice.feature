Feature: Validate that the displayed price is the same that appears when viewing the product detail - US

    Scenario: Como usuario quiero solicitar un reporte
        Given Ingreso a la pantalla de home de SODIMAC
        When Ingreso los datos de la busqueda referida a "pintura blanca"
        Then valido que los precios son iguales
