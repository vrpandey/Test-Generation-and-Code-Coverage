// Core/NPM Modules
const esprima = require("esprima");
const faker   = require("faker");
const fs      = require('fs');
const Random  = require('random-js');
const _       = require('lodash');
const randexp = require('randexp');



// Set options
faker.locale  = "en";
const options = { tokens: true, tolerant: true, loc: true, range: true };

let functionConstraints = {};



// Create random generator engine
const engine = Random.engines.mt19937().autoSeed();


/**
 * Constraint class. Represents constraints on function call parameters.
 *
 * @property {String}                                                          ident      Identity of the parameter mapped to the constraint.
 * @property {String}                                                          expression Full expression string for a constraint.
 * @property {String}                                                          operator   Operator used in constraint.
 * @property {String|Number}                                                   value      Main constraint value.
 * @property {String|Number}                                                   altvalue   Constraint alternative value.
 * @property {String}                                                          funcName   Name of the function being constrained.
 * @property {'fileWithContent'|'fileExists'|'integer'|'string'|'phoneNumber'} kind       Type of the constraint.
 */
class Constraint {
    constructor(properties){
        this.ident = properties.ident;
        this.expression = properties.expression;
        this.operator = properties.operator;
        this.value = properties.value;
        this.altvalue = properties.altvalue;
        this.funcName = properties.funcName;
        this.kind = properties.kind;
    }
}



/**
 * Generate function parameter constraints for an input file
 * and save them to the global functionConstraints object.
 *
 * @param   {String} filePath Path of the file to generate tests for.
 * @returns {Object}          Function constraints object.
 */
function constraints(filePath) {

    // Initialize function constraints directory
    

    // Read input file and parse it with esprima.
    let buf = fs.readFileSync(filePath, "utf8");
    let result = esprima.parse(buf, options);

    // Start traversing the root node
    traverse(result, function (node) {

        // If some node is a function declaration, parse it for potential constraints.
        if (node.type === 'FunctionDeclaration') {

            // Get function name and arguments
            let funcName = functionName(node);
            let params = node.params.map(function(p) {return p.name});

            // Initialize function constraints
            functionConstraints[funcName] = {
                constraints: _.zipObject(params, _.map(params, () => [])),
                params: params
            };


            

            // Traverse function node.
            traverse(node, function(child) {

                
                if( child.type === 'BinaryExpression') {
                    //getBinaryConstraints(params, child, buf, funcName, functionConstraints);
                    
                    var randomString = "\"random\"";

                    if( child.left.type == 'Identifier' && params.indexOf( child.left.name ) > -1)
                        {
                            // get expression from original source code:
                            var expression = buf.substring(child.range[0], child.range[1]);
                            var rightHand = buf.substring(child.right.range[0], child.right.range[1]);
                            kind = typeof(rightHand);
                            
                                                            
                
                            if(!isNaN(rightHand)) {
                                kind = "integer"
                                if(child.operator == "==") {

                                    let ident = child.left.name;

                                    functionConstraints[funcName].constraints[ident].push(
                                        new Constraint({
                                            ident: child.left.name,
                                            value: parseFloat(rightHand),
                                            funcName: funcName,
                                            kind: kind,
                                            operator : child.operator,
                                            expression: expression
                                        })
                                    );

                                    functionConstraints[funcName].constraints[ident].push(
                                        new Constraint({
                                            ident: child.left.name,
                                            value: parseFloat(rightHand)+1,
                                            funcName: funcName,
                                            kind: kind,
                                            operator : child.operator,
                                            expression: expression
                                        })
                                    );

                                 
                                }
                                else  if(child.operator == "!="){

                                    let ident = child.left.name;

                                    functionConstraints[funcName].constraints[ident].push(
                                        new Constraint({
                                            ident: child.left.name,
                                            value: parseFloat(rightHand),
                                            funcName: funcName,
                                            kind: kind,
                                            operator : child.operator,
                                            expression: expression
                                        })
                                    );

                                    functionConstraints[funcName].constraints[ident].push(
                                        new Constraint({
                                            ident: child.left.name,
                                            value: parseFloat(rightHand)+1,
                                            funcName: funcName,
                                            kind: kind,
                                            operator : child.operator,
                                            expression: expression
                                        })
                                    );

                                }
                                else  if(child.operator == "<"){
                                    

                                    let ident = child.left.name;

                                    functionConstraints[funcName].constraints[ident].push(
                                        new Constraint({
                                            ident: child.left.name,
                                            value: parseFloat(rightHand),
                                            funcName: funcName,
                                            kind: kind,
                                            operator : child.operator,
                                            expression: expression
                                        })
                                    );

                                    functionConstraints[funcName].constraints[ident].push(
                                        new Constraint({
                                            ident: child.left.name,
                                            value: parseFloat(rightHand)-1,
                                            funcName: funcName,
                                            kind: kind,
                                            operator : child.operator,
                                            expression: expression
                                        })
                                    );
                                    

                                   
                                }
                                else  if(child.operator == ">"){

                                    let ident = child.left.name;

                                    functionConstraints[funcName].constraints[ident].push(
                                        new Constraint({
                                            ident: child.left.name,
                                            value: parseFloat(rightHand),
                                            funcName: funcName,
                                            kind: kind,
                                            operator : child.operator,
                                            expression: expression
                                        })
                                    );

                                    functionConstraints[funcName].constraints[ident].push(
                                        new Constraint({
                                            ident: child.left.name,
                                            value: parseFloat(rightHand)+1,
                                            funcName: funcName,
                                            kind: kind,
                                            operator : child.operator,
                                            expression: expression
                                        })
                                    );

                                    
                                }
                                else  if(child.operator == "<="){
                                   
                                    let ident = child.left.name;
                                    
                                    functionConstraints[funcName].constraints[ident].push(
                                        new Constraint({
                                            ident: child.left.name,
                                            value: parseFloat(rightHand),
                                            funcName: funcName,
                                            kind: kind,
                                            operator : child.operator,
                                            expression: expression
                                        })
                                    );

                                    functionConstraints[funcName].constraints[ident].push(
                                        new Constraint({
                                            ident: child.left.name,
                                            value: parseFloat(rightHand)+1,
                                            funcName: funcName,
                                            kind: kind,
                                            operator : child.operator,
                                            expression: expression
                                        })
                                    );
                                    
                                  
                                }
                                else  if(child.operator == ">="){
                                    
                                    let ident = child.left.name;

                                    functionConstraints[funcName].constraints[ident].push(
                                        new Constraint({
                                            ident: child.left.name,
                                            value: parseFloat(rightHand),
                                            funcName: funcName,
                                            kind: kind,
                                            operator : child.operator,
                                            expression: expression
                                        })
                                    );

                                    functionConstraints[funcName].constraints[ident].push(
                                        new Constraint({
                                            ident: child.left.name,
                                            value: parseFloat(rightHand)-1,
                                            funcName: funcName,
                                            kind: kind,
                                            operator : child.operator,
                                            expression: expression
                                        })
                                    );
                                    
                                   
                                }
                
                            }
                            else if(rightHand == "undefined") {


                                let ident = child.left.name;

                                functionConstraints[funcName].constraints[ident].push(
                                    new Constraint({
                                        ident: child.left.name,
                                        value: rightHand,
                                        funcName: funcName,
                                        kind: kind,
                                        operator : child.operator,
                                        expression: expression
                                    })
                                );

                                functionConstraints[funcName].constraints[ident].push(
                                    new Constraint({
                                        ident: child.left.name,
                                        value: 10,
                                        funcName: funcName,
                                        kind: kind,
                                        operator : child.operator,
                                        expression: expression
                                    })
                                );

                            }
                            else if(typeof(rightHand) == "string") {
                                if(child.operator == "==") {

                                    let ident = child.left.name;

                                    functionConstraints[funcName].constraints[ident].push(
                                        new Constraint({
                                            ident: child.left.name,
                                            value: rightHand,
                                            funcName: funcName,
                                            kind: kind,
                                            operator : child.operator,
                                            expression: expression
                                        })
                                    );

                                    functionConstraints[funcName].constraints[ident].push(
                                        new Constraint({
                                            ident: child.left.name,
                                            value: randomString,
                                            funcName: funcName,
                                            kind: kind,
                                            operator : child.operator,
                                            expression: expression
                                        })
                                    );

                                   	
                
                                }
                                else  if(child.operator == "!="){


                                    let ident = child.left.name;

                                    functionConstraints[funcName].constraints[ident].push(
                                        new Constraint({
                                            ident: child.left.name,
                                            value: rightHand,
                                            funcName: funcName,
                                            kind: kind,
                                            operator : child.operator,
                                            expression: expression
                                        })
                                    );

                                    functionConstraints[funcName].constraints[ident].push(
                                        new Constraint({
                                            ident: child.left.name,
                                            value: randomString,
                                            funcName: funcName,
                                            kind: kind,
                                            operator : child.operator,
                                            expression: expression
                                        }
                                    ));
	
                
                                }
                
                            }
                            
                        }
                        else if(child.left.type == 'Identifier' && params.indexOf("phoneNumber") >-1) {
                            var expression = buf.substring(child.range[0], child.range[1]);
                            var rightHand = buf.substring(child.right.range[0], child.right.range[1]);
                
                            if (child.operator == "==" || child.operator == "!=" ){
                
                
                            
                            var temp = '-000-0000';
                            var number = rightHand.substring(1,4)
                
                            var number1=parseInt(number)+1;
                            var phoneNum1 = number + temp;
                
                         
                            var phoneNum2 = number1.toString() + temp;
                
                            }

                            // To add phone number constraint
                            functionConstraints[funcName].constraints["phoneNumber"].push( 
                                new Constraint({
                                    ident: "phoneNumber",
                                    value: "'" + phoneNum1 + "'",
                                    funcName: funcName,
                                    kind: 'phoneNumber',
                                    operator : child.operator,
                                    expression: expression
                                }
                            ));

                            functionConstraints[funcName].constraints["phoneNumber"].push( 
                                new Constraint({
                                    ident: "phoneNumber",
                                    value: "'" + phoneNum2 + "'",
                                    funcName: funcName,
                                    kind: 'phoneNumber',
                                    operator : child.operator,
                                    expression: expression
                                }
                            ));
                                
                          
                         
                                
                    
                        }
                        else if(child.left.type == 'CallExpression') {
                            //console.log("----- " + rightHand);
                            //kind = typeof
                            var leftChild = child.left;
                            if(child.left.callee && child.left.callee.property.name == "indexOf") {
                                var callString = "\"" +  child.left.arguments[0].value + "\"";

                                let ident = child.left.callee.object.name;

                                    functionConstraints[funcName].constraints[ident].push(
                                        new Constraint({
                                            ident: ident,
                                            value: callString,
                                            funcName: funcName,
                                            kind: kind,
                                            operator : child.operator,
                                            expression: expression
                                        })
                                    );

                                    functionConstraints[funcName].constraints[ident].push(
                                        new Constraint({
                                            ident: ident,
                                            value: randomString,
                                            funcName: funcName,
                                            kind: kind,
                                            operator : child.operator,
                                            expression: expression
                                        })
                                    );

                               
                
                            }
                        }
                        
			
				

                }



            if( child.type == "CallExpression" && 
                child.callee.property &&
                child.callee.property.name =="readFileSync" )
           {

               for( var p =0; p < params.length; p++ )
               {

                    let ident = params[p];

                   if( child.arguments[0].name == params[p] )
                   {
                       //non-empty file
                       functionConstraints[funcName].constraints[ident].push( 
                       new Constraint(
                       {
                           ident: params[p],
                           value:  "'pathContent/file1'",
                           funcName: funcName,
                           kind: "fileWithContent",
                           operator : child.operator,
                           expression: expression
                       }));
                       //empty file
                       functionConstraints[funcName].constraints[ident].push( 
                       new Constraint(
                       {
                           ident: params[p],
                           value:  "'pathContent/file2'",
                           funcName: funcName,
                           kind: "fileWithContent",
                           operator : child.operator,
                           expression: expression
                       }));
                    
                   }
               }
           }


            if( child.type == "CallExpression" &&
                child.callee.property &&
                child.callee.property.name =="existsSync")
           {
           

               for( var p =0; p < params.length; p++ )
               {
                let ident = params[p];

                   if (params[p]==child.arguments[0].name){
                       
                      
                           functionConstraints[funcName].constraints[ident].push( 
                           new Constraint(
                           {
                               ident: params[p],
                               // A fake path to a file
                               value:  "'emptyDir'",
                               funcName: funcName,
                               kind: "fileExists",
                               operator : child.operator,
                               expression: expression
                           }));
                           functionConstraints[funcName].constraints[ident].push( 
                            new Constraint(
                            {
                                ident: params[p],
                                // A fake path to a file
                                value:  "'nonEmptyDir'",
                                funcName: funcName,
                                kind: "fileExists",
                                operator : child.operator,
                                expression: expression
                            }));
                       
                   }
                  
               }
           }

           
            
           
                            
                                  

            if(child.type == "UnaryExpression"  && child.argument && child.argument.property && child.argument.property.type == "Identifier") {
                    
                    let propertyName = child.argument.property.name;
                    let nullOptions = {};
                    let trueOptions = {};
                    trueOptions[propertyName] = true;
                    let falseOptions = {};
                    falseOptions[propertyName] = false;

                    let ident = child.argument.object.name;

                    functionConstraints[funcName].constraints[ident].push( 
                        new Constraint({
                            ident: child.argument.object.name,
                            value:  JSON.stringify(nullOptions),
                            funcName: funcName,
                            kind: "Identifier",
                            operator : child.operator,
                            expression: expression
                        }
                    ));
                    functionConstraints[funcName].constraints[ident].push( 
                        new Constraint({
                            ident: child.argument.object.name,
                            value:  JSON.stringify(trueOptions),
                            funcName: funcName,
                            kind: "Identifier",
                            operator : child.operator,
                            expression: expression
                        }
                    ));
                    functionConstraints[funcName].constraints[ident].push( 
                        new Constraint({
                            ident: child.argument.object.name,
                            value:  JSON.stringify(falseOptions),
                            funcName: funcName,
                            kind: "Identifier",
                            operator : child.operator,
                            expression: expression
                        }
                    ));					
            }
                                                   

                


            });

            // console.log( functionConstraints[funcName]);

        }
    });

    return functionConstraints;
}



function makeConstraint(name, value,funcName, kind, operator, expression) {
	return new Constraint(
		{
			ident: name,
			value: value,
			funcName: funcName,
			kind: kind,
			operator : operator,
			expression: expression
		});
}

/**
 * Traverse an object tree, calling the visitor at each
 * visited node.
 *
 * @param {Object}   object  Esprima node object.
 * @param {Function} visitor Visitor called at each node.
 */
function traverse(object, visitor) {

    // Call the visitor on the object
    visitor(object);

    // Traverse all children of object
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            let child = object[key];
            if (typeof child === 'object' && child !== null) {
                traverse(child, visitor);
            }
        }
    }
}


/**
 * Return the name of a function node.
 */
function functionName(node) {
    return node.id ? node.id.name : '';
}


/**
 * Generates an integer value based on some constraint.
 *
 * @param   {Number}  constraintValue Constraint integer.
 * @param   {Boolean} greaterThan     Whether or not the concrete integer is greater than the constraint.
 * @returns {Number}                  Integer satisfying constraints.
 */
function createConcreteIntegerValue(constraintValue, greaterThan) {
    if( greaterThan ) return Random.integer(constraintValue + 1, constraintValue + 10)(engine);
    else return Random.integer(constraintValue - 10, constraintValue - 1)(engine);
}


// Export
module.exports = constraints;